import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <h3>
        Contact <span>Us</span>
      </h3>
      <div className="container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890576.0365973708!2d31.154506296947247!3d29.31717102280915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14595d80f161a11f%3A0x3c9aea4c2ab337ed!2z2YXYrdin2YHYuNipINin2YTZgdmK2YjZhQ!5e0!3m2!1sar!2seg!4v1723884304214!5m2!1sar!2seg"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="cont">
              <h5>
                Contact <span>Info</span>
              </h5>
              <div className="cont-itme">
                <h6>Phone:</h6>
                <p>+2010 9534 8649</p>
              </div>
              <div className="cont-itme">
                <h6>Email:</h6>
                <p>Ashour25@gmail.com</p>
              </div>
              <div className="cont-itme">
                <h6>Address:</h6>
                <p>Egypt, El-fayoum</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8">
            <form>
              <h5>Get In <span>Touch</span> </h5>
              <div className="div1">
                <div className="div2">
                  <label htmlFor="First">First Name :</label>
                  <br />
                  <input type="text" id="First" placeholder="First Name" />
                </div>
                <div  className="div2">
                  <label htmlFor="Last">Last Name :</label>
                  <br />
                  <input type="text" id="Last" placeholder="Last Name" />
                </div>
              </div>
              <label htmlFor="Subject">Subject :</label>
              <br />
              <input type="text" id="Subject" placeholder="Subject" />
              <br />
              <label htmlFor="Message">Message :</label>
              <br />
              <textarea id="Message" placeholder="Message"></textarea>
              <br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
