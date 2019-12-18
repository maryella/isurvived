import React from "react";
import { Link } from "react-router-dom";

const FaqPage = () => {
  return (
    <>
      <div className="container bg-light p-4 rounded">
        <div>
          <h1 className="text-center m-2">Frequently Asked Questions</h1>
        </div>
        <div>
          <ul>
            <li>
              <h2 className="h5 font-weight-bold">First Question</h2>
              <p>Answer</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
