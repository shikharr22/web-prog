import React from "react";
import "./App.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <img
            src="http://www.electronicsandyou.com/blog/wp-content/uploads/2014/06/electricity.jpg"
            style={{
              position: "relative",
              top: "2rem",
              margin: "2rem",
              left: "2rem",
              width: "40rem",
              height: "25rem",
              borderRadius: "0.5rem",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "Merriweather",
            position: "relative",
            top: "3rem",
            padding: "1rem",
            height: "auto",
            width: "50%",
            margin: "2rem",
            marginTop: "0rem",
            fontSize: "0.9rem",
            textAlign: "justify",
            backgroundColor: "#050A30",
            color: "white",
            borderRadius: "0.4rem",
            opacity: "0.9",
          }}
        >
          Electrical and Electronics Engineering Department caters to the needs
          of the U.G. and P.G students both in terms of Acadamics and Soft
          skills. The knowledge acquired during the courses helps them to be
          placed both in core and software companies. Post graduate students are
          exposed to comprehensive knowledge in Power Electronics domain which
          inturn helps them to carryout research activities and parallelly
          acquire jobs Core and software companies. They can also enter teaching
          profession in various Engineering colleges across India. The Centre of
          Excellence in e-Mobility is established in the department in
          association with Greaves Cotton Limited.
          <p style={{ fontSize: "1.2rem", color: "#D6AD60" }}>MISSION</p>
          <p>To motivate faculty and students, improve tie-ups with industries and provided quality electrical education
          </p>
          <p style={{ fontSize: "1.2rem", color: "#D6AD60" }}>
            VISION</p><p>Attain technical excellence in Electrical and Electronics
            Engineering through the UG and PG courses provided
          </p>
        </p>
      </div>
    </>
  );
};

export default Home;
