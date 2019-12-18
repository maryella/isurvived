import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const getMeds = async () => {
    const response = await fetch("http://localhost:3000/meds", {
      method: "GET",
      credentials: "include"
    });
    const data = response.json();
    return data;
  };
  useEffect(() => {
    getMeds().then(response => setData(response));
  }, []);
  console.log("data", data);

  return (
    <div className="container bg-light p-4 rounded">
      <div></div>
      <div>
        <h1 className="font-weight-bold mb-3">My Medication List</h1>
        {!data.length ? (
          <div className="text-center p-5">
            <h2 className="h4  p-5">
              Looks like you haven't added any meds yet.
              <br /> Click below to get started.
            </h2>

            <Link to="/walkthroughintro">
              <button type="button" className="btn btn-outline-danger btn-lg">
                Get Started
              </button>
            </Link>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Drug Name</th>
                <th>Dose</th>
                <th>Directions</th>
                <th>Comments</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {data.map(entry => {
                return (
                  <tr key={entry.drugname}>
                    <td>{entry.classname}</td>
                    <td>{entry.drugname}</td>
                    <td>{entry.strength}</td>
                    <td>
                      Take {entry.quantity} {entry.formulation}{" "}
                      {entry.frequency} {entry.time}
                    </td>
                    <td>{entry.comments}</td>
                    <td>
                      <Link to={entry.updateroute}>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
