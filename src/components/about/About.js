import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="container">
        <h2>About</h2>
        <div className="pre">
        <p>
          Furns is a global furniture destination for somethings. We sell
          cutting-edge furniture and offer a wide variety of fashion-related
          content.
        </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="/imges/_images_about_01.jpg" alt=".." />
          </div>
          <div className="col-12 col-md-6 cont">
            <h5>OUR MISSION</h5>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-12 col-md-6 cont">
            <h5>OUR STORES</h5>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="/imges/_images_about_02.jpg" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
