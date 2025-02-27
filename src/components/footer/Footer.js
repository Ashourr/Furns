import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div>
                <h4>Furns</h4>
                <p>
                  Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
                  tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud.
                </p>
                <div className="icon ">
                  <a
                    className={`a `}
                    target="-block"
                    href="https://www.facebook.com/profile.php?id=100005869890293&mibextid=JRoKGi"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="i" />
                  </a>
                  <a
                    className={`a `}
                    target="-block"
                    href="https://www.instagram.com/shwr7055?igsh=MTY2dDI0eG1wdDJiMg=="
                  >
                    <FontAwesomeIcon icon={faInstagram} className="i" />
                  </a>
                  <a
                    className={`a `}
                    target="-block"
                    href="https://api.whatsapp.com/send/?phone=201095348649&text&type=phone_number&app_absent=0"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="i" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div>
                <h4>Pages</h4>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/prodcut"}>Products</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                  <li>
                    <Link>Login</Link>
                  </li>
                  <li>
                    <Link>My Car</Link>
                  </li>
                  <li>
                    <Link>Wishlist</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
                tempor incididunt ut labor et dolore magna aliqua.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h4>NEWSLETTER</h4>
              <form>
                <input type="text" placeholder="Enter Your Email" />
                <br />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={`copy`}>
        <p>Copyright 2024 &copy; All Right Reserved</p>
        <h6>Ashour (ابن الناظر)</h6>
      </div>
    </>
  );
}

export default Footer;
