import React from "react";
import "./heder.css";
import { Link } from "react-router-dom";
function Heder() {
  return (
    <div className="heder">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 cont">
            <h6>New Products</h6>
            <h1>Flexible Chair</h1>
            <p>
              Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
              eiusmo tempor incididunt ut labore et dolore magna
            </p>
            <Link to={"/prodcut"}>Shop Now</Link>
            </div>
          <div className="col col-lg-6 img">
            <img src="/imges/asset 4.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heder;
