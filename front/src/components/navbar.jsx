import React, { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import StateContext from "../context";
import LogOut from "./logout";

const NavBar = props => {
  const context = useContext(StateContext);

  let { logged_in } = context[0];
  console.log("context", logged_in);

  const [value, dispatch] = useContext(StateContext);
  const verifylogin = async data => {
    const response = await fetch("http://localhost:3000/verify", {
      method: "GET",
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
    }
    if (reply.status !== 200) {
      console.log("logout error");
    }
  };
  useEffect(() => {
    verifylogin();
  }, [0]);
  return (
    <>
      <div className="mb-2">
        <nav className="navbar sticky-top navbar-light navbar-expand-lg navbar-dark">
          <Link className="navbar-brand homelogo logo" to="/">
            i-Survived
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link" to="/faq">
                FAQ
              </Link>
              <Link className="nav-item nav-link" to="/contact us">
                Contact
              </Link>
              {logged_in && (
                <Link
                  className="nav-item nav-link dashboard"
                  to="/loggedin/dashboard"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="form-inline">
            {logged_in ? (
              <>
                <LogOut className="nav-item nav-link" />
              </>
            ) : (
              <>
                <div className="navbar-nav ">
                  <Link className="nav-item nav-link dashboard" to="/signup">
                    Sign Up
                  </Link>
                </div>
                <Link className="nav-item nav-link" to="/login">
                  <button type="button" className="btn btn-outline-light">
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default withRouter(NavBar);
