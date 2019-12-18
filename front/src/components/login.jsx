import React, { useContext, useState } from "react";
import StateContext from "../context";
import { Redirect, Link } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [badlogin, setBadLogIn] = useState(false);
  const [value, dispatch] = useContext(StateContext);

  const logIn = async data => {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const reply = await response;
    if (reply.status === 200) {
      dispatch({
        type: "log in"
      });
      setRedirect(true);
    }
    if (reply.status !== 200) {
      setBadLogIn(true);
      setEmail("");
      setPassword("");
    }
  };

  let updateEmail = emailInput => {
    setEmail(emailInput);
  };
  let updatePassword = passwordInput => {
    setPassword(passwordInput);
  };

  const handleSubmit = e => {
    const data = { email, password };

    logIn(data);
  };

  return (
    <>
      {redirect && <Redirect to="/loggedin/dashboard" />}

      <section role="main" className="container position-relative p-4 w-85">
        <div className="card p-4 w-50 position-relative m-auto text-center">
          <h1 className="h2 mb-3 font-weight-bold">Log In</h1>
          {badlogin && (
            <div>
              Sorry, something's not right. <br /> Please try again.
            </div>
          )}
          <label className="sr-only">Email address</label>
          <div className="p-2">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              onChange={e => updateEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className="p-2">
            <label className="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              onChange={e => updatePassword(e.target.value)}
              required
            ></input>
          </div>
          <div className="p-3">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-outline-danger"
            >
              Log In
            </button>
          </div>
          <div className="p-2">
            No account yet?
            <br></br>
            <Link to="/signup" className="text-danger">
              Sign Up!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogInForm;
