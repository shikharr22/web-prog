import "./App.css";
import Placements from "./Placements";
import Home from "./Home";
import Courses from "./Courses";
import Faculty from "./Faculty";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

//Navbar, Placements, Home,Courses, Faculty are react functional components

const App = () => {
  // state variables to handle the change of tabs
  const [home, setHome] = useState(true);
  const [placements, setPlacements] = useState(true);
  const [courses, setCourses] = useState(true);
  const [faculty, setFaculty] = useState(true);

  // useEffect used to initialise the state variables with respective values once the page loads
  useEffect(() => {
    setHome(true);
    setPlacements(false);
    setCourses(false);
    setFaculty(false);
  }, []);

  // Functions to handle the change in state variables

  const handleHome = () => {
    setHome(true);
    setPlacements(false);
    setCourses(false);
    setFaculty(false);
  };

  const handleCourses = () => {
    setHome(false);
    setPlacements(false);
    setCourses(true);
    setFaculty(false);
  };
  const handlePlacement = () => {
    setHome(false);
    setPlacements(true);
    setCourses(false);
    setFaculty(false);
  };
  const handleFaculty = () => {
    setHome(false);
    setPlacements(false);
    setCourses(false);
    setFaculty(true);
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="section-display">
        <div className="tabs">
          <ul className="tabs-list">
            {/* unordered list used to display the tabs */}
            <li className="tab-item" onClick={handleHome}>
              Home
            </li>
            <li className="tab-item" onClick={handleCourses}>
              Courses{" "}
            </li>
            <li className="tab-item" onClick={handlePlacement}>
              Placements
            </li>
            <li className="tab-item" onClick={handleFaculty}>
              Faculty
            </li>
          </ul>
        </div>
        <div className="display">
          {/* ternary if statements used to display the tabs based on selection by user */}
          {home ? <Home /> : ""}
          {placements ? <Placements /> : ""}
          {courses ? <Courses /> : ""}
          {faculty ? <Faculty /> : ""}
        </div>
      </div>
    </div>
  );
};

export default App;
