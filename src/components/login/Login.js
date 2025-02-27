import React, { useState } from "react";
import "./loginAndSingup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [accept, setaccept] = useState(false);
  let [emailError, setemailError] = useState(false);

  let Navigate = useNavigate();

  async function formSubmit(e) {
    let flog = true;
    e.preventDefault();
    setaccept(true);
    if (password.length < 8) {
      flog = false;
    } else {
      flog = true;
    }
    try {
      if (flog) {
        let res = await axios.post("http://localhost:1337/api/auth/local", {
          identifier: email,
          password: password,          
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          Navigate(`/`);
        }
      }
    } catch (error) {
      setemailError(error.response.data.error.status)
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={formSubmit}>
      {accept && emailError === 400 && <span className="error">Invalid identifier or password</span>}
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
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {password.length < 8 && accept && <span>the password is lath 6</span>}
        <br />
        <button type="submit">Login</button>
        <div className="link">
          <Link to={"/singup"}>Create a account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
