import React from "react";
import { Link } from "react-router-dom";

const LaunchPage = () => {
  return (
    <>
      <div className="container bg-light p-4">
        <div>
          <h1 className="text-center m-2">Ready to get started?</h1>
        </div>
        <p className="h4 pb-3">
          You will walk through each class of drug that is usually recommended
          for people who have had a heart attack. You'll get a little
          information about the drug, then enter which one you are taking.
        </p>
        <div className="text-center">
          <Link to="/walkthrough/raas">
            <button type="button" className="btn btn-outline-danger btn-lg">
              Begin
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LaunchPage;
