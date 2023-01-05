import React, { useState } from "react";
import { coursesData2 ,coursesData3,coursesData4} from "./coursesData";
import "./courses.css";
import "./App.css";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState("https://m.media-amazon.com/images/I/91AJEaq9XcL.jpg");

  return (
    <>
      <div className="courses-container">
        <div className="courses-list">
          <div className="grid">
            <div className="row1">
                {/* 2nd year */}
              <ul style={{ listStyleType: "none", marginTop: "4rem" }}>
                <li style={{ fontSize: "2rem", color: "#D6AD60" }}>2nd year</li>
                {coursesData2.map((course) => (
                  <li
                    className="course"
                    onClick={() => setSelectedCourse(course.imageUrl)}
                  >
                    {course.semester} semester{" "}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        color: "#7EC8E3",
                      }}
                    >
                      {course.title}
                    </span>
                  </li>
                ))}
              </ul>
              {/* 3rd year */}
              <ul style={{ listStyleType: "none", marginTop: "4rem" }}>
                <li style={{ fontSize: "2rem", color: "#D6AD60" }}>3rd year</li>
                {coursesData3.map((course) => (
                  <li
                    className="course"
                    onClick={() => setSelectedCourse(course.imageUrl)}
                  >
                    {course.semester} semester{" "}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        color: "#7EC8E3",
                      }}
                    >
                      {course.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="row2">
              {/* 4th year */}
              <ul style={{ listStyleType: "none", marginTop: "4rem" }}>
                <li style={{ fontSize: "2rem", color: "#D6AD60" }}>4th year</li>
                {coursesData4.map((course) => (
                  <li
                    className="course"
                    onClick={() => setSelectedCourse(course.imageUrl)}
                  >
                    {course.semester} semester{" "}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        color: "#7EC8E3",
                      }}
                    >
                      {course.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        <div className="courses-pic">
          <img
            src={selectedCourse}
            style={{
              position: "relative",
              top: "12rem",
              width: "20rem",
              height: "25rem",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Courses;
