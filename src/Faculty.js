import React from "react";
import "./App.css";
import "./faculty.css";
import { facultyData } from "./facultyData";

const Faculty = () => {
  return (
    <>
      <div className="faculty-container">
        <ul className="faculty-grid">
          {facultyData.map((faculty) => (
            <li className="faculty-item">
              <img
                src={faculty.picUrl}
                style={{ width: "10rem", height: "10rem" }}
              />
              <p
                style={{
                  marginBottom: "0",
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                {faculty.name}
              </p>
              <p
                style={{
                  marginBottom: "0.1rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                {faculty.designation}
              </p>
              <p
                style={{
                  marginBottom: "0.1rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                {faculty.Qualification}
              </p>
              <p
                style={{
                  marginBottom: "0",
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                {faculty.experience}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Faculty;
