import React, { useState } from "react";
import "./loginAndSingup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Singup() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [rpassword, setrpassword] = useState("");

  let [accept, setaccept] = useState(false);
  let [emailError, setemailError] = useState("");

  let Navigate = useNavigate();
  async function formSubmit(e) {
    let flog = true;
    e.preventDefault();
    setaccept(true);

    if (name.length <= 0 || password.length < 8 || rpassword !== password) {
      flog = false;
    } else {
      flog = true;
    }

    if (flog) {
      try {
        if (flog) {
          let res = await axios.post(
            "http://localhost:1337/api/auth/local/register",
            {
              username: name,
              email: email,
              password: password,
            }
          );
          if (res.status === 200) {
            window.localStorage.setItem("email", email);
            Navigate(`/`);
          }
        }
      } catch (error) {
        setemailError(error.response.data.error.status);
      }
    }
  }
  return (
    <div className="sinup">
      <h2>Sinup</h2>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {name.length <= 3 && accept && (
          <span className="error">uesr name is required</span>
        )}
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        {accept && emailError === 400 && (
          <span className="error">Invalid identifier</span>
        )}
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {password.length < 6 && accept && (
          <span className="error">password is lath 6</span>
        )}
        <label htmlFor="cpassword">Confirm Password</label>
        <br />
        <input
          id="cpassword"
          type="password"
          placeholder="Enter Your Confirm Password"
          value={rpassword}
          onChange={(e) => setrpassword(e.target.value)}
        />
        {rpassword !== password && accept && (
          <span className="error">password Repeat not password</span>
        )}
        <br />
        <button type="submit">Singup</button>
        <div className="link">
          <Link to={"/login"}>Already have a account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Singup;
