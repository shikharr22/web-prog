import React from "react";
import "./App.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div style={{ display:"flex",flexDirection:"column",width: "50%" }}>
          <img
            src={require("./eee_dept.jpg")}
            style={{
              position: "relative",
              top: "5rem",
              margin: "2rem",
              left: "2rem",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "Merriweather",
            position: "relative",
            top: "5rem",
            padding:"1rem",
            height:"auto",
            width: "50%",
            margin: "2rem",
            fontSize: "0.9rem",
            textAlign: "justify",
            backgroundColor:"#050A30",color:"white",
            borderRadius:"0.4rem",
            opacity:'0.9',
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
          association with Greaves Cotton Limited. The MoU has been signed on
          11th Feb 2020. Company has sponsored five 2-wheelers and donated
          accessories for the Lab. This Lab is also equipped with high end
          computers and related software for students to carry out their
          project.
        </p>
      </div>
    </>
  );
};

export default Home;
