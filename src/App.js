import "./App.css";
import Placements from "./Placements";
import Home from "./Home";
import Courses from "./Courses";
import Faculty from "./Faculty";
import { useEffect, useState } from "react";

function App() {

  const [home,setHome]=useState(true);
  const [placements,setPlacements]=useState(true);
  const [courses,setCourses]=useState(true);
  const [faculty,setFaculty]=useState(true);

  useEffect(()=>{
    setHome(true);
    setPlacements(false);
    setCourses(false);
    setFaculty(false);
  },[])

  const handleHome=()=>{
    setHome(true);
    setPlacements(false);
    setCourses(false);
    setFaculty(false);
  }

  const handleCourses=()=>{
    setHome(false);
    setPlacements(false);
    setCourses(true);
    setFaculty(false);
  }
  const handlePlacement=()=>{
    setHome(false);
    setPlacements(true);
    setCourses(false);
    setFaculty(false);
  }
  const handleFaculty=()=>{
    setHome(false);
    setPlacements(false);
    setCourses(false);
    setFaculty(true);
  }
  return (
    <div className="container">
      <div className="navbar"></div>
      <div className="tabs-display">
        <div className="tabs">
          <ul className="tabs-list">
            <li className="tab-item" onClick={handleHome}>Home</li>
            <li className="tab-item" onClick={handleCourses}>Courses </li>
            <li className="tab-item" onClick={handlePlacement}>Placements</li>
            <li className="tab-item" onClick={handleFaculty}>Faculty</li>
          </ul>
        </div>
        <div className="display">
          {home?<Home/>:''}
          {placements?<Placements/>:''}
          {courses?<Courses/>:''}
          {faculty?<Faculty/>:''}
        </div>
      </div>
    </div>
  );
}

export default App;
