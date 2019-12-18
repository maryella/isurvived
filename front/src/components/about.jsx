import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className="container bg-light p-4 rounded">
        <div>
          <h1 className="text-center m-2">About This Project</h1>
        </div>
        <p className="h5 pb-3">
          This project is based on an idea from Mary Ella Hill, a former
          pharmacist, who noticed there are a lot of different medications for
          people who have had a heart attack. This long list would be especially
          daunting to people who were previously not on many (or any!)
          medications.
        </p>
        <div className="navbar-light">
          <div className="navbar-nav text-center">
            <Link to="/faq" className="nav-item nav-link ">
              Read more in our frequently asked questions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
