import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section role="main">
      <div className="container position-relative p-5 w-85">
        <div className="jumbotron brightred">
          <h1 className="top">
            You survived a heart attack.
            <br />
          </h1>
          <h1 className="top text-right">...What comes next?</h1>
        </div>

        <div className="container  p-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-4 bg-light shadowbox">
                <h2 className="text-center contentheader">
                  Learn More About Your Meds
                </h2>
                <p className="text-justify">
                  After a heart attack, your doctor will likely prescribe
                  several different medications for you but may not have the
                  time to properly explain each one. We give you information
                  about your new drugs.
                </p>
                <p className="text-center mt-3">
                  <Link to="/signup">
                    <button type="button" className="btn btn-outline-danger">
                      Learn More
                    </button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 bg-light shadowbox">
                <h2 className="text-center contentheader">
                  Double Checking Your Doctor
                </h2>
                <p className="text-justify">
                  There are at least 5 types of medication that have been shown
                  to help you live longer and prevent heart attack. We help you
                  make sure you are taking each one if it's appropriate for you.
                </p>
                <p className="text-center mt-3">
                  <Link to="/">
                    <button type="button" className="btn btn-outline-danger">
                      Learn More
                    </button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 bg-light shadowbox">
                <h2 className="text-center contentheader">
                  Keep Track of Your New Medications
                </h2>
                <p className="text-justify">
                  Have a list of medications to share with your providers as you
                  move forward with your life. If there's a reason why you can't
                  take a particular type of medication, you can have an
                  explanation for other providers who notice you're not taking
                  one of these important drugs.
                </p>
                <p className="text-center mt-3">
                  <Link to="/signup">
                    <button type="button" className="btn btn-outline-danger">
                      Sign Up
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
