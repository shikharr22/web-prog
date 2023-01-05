import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d2/R.V._College_of_Engineering_logo.png"
          style={{width: "5rem", height: "5rem",marginRight:'1rem'}}
        />
        <p style={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}>
          Department of Electrical and Electronics Engineering
        </p>
      </div>
    </>
  );
};

export default Navbar;
