import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Druglist = require("../util/drugs.json");

const UpdateForm = ({ category }) => {
  const [classname, setClassName] = useState("");
  const [drugname, setDrugName] = useState("");
  const [strength, setStrength] = useState("");
  const [formulation, setFormulation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [frequency, setFrequency] = useState("");
  const [timing, setTiming] = useState("");
  const [comments, setComments] = useState("");
  const [redirect, setRedirect] = useState(false);

  const drugcategory = Druglist[category];

  const drugsincategory = drugcategory.drugs;
  const mappeddrugs = Object.entries(drugsincategory);

  let activedrugname = drugname;

  const updateMed = async data => {
    const response = await fetch("http://localhost:3000/meds/update", {
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
    }
    if (reply.status !== 200) {
      alert("Error");
    }
  };

  const updateDrugName = drugnameInput => {
    setDrugName(drugnameInput);
    setClassName(drugcategory.categoryname);
  };
  const updateStrength = strengthInput => {
    setStrength(strengthInput);
    if (activedrugname.length > 0) {
      setFormulation(drugsincategory[activedrugname]["form"]);
    }
  };
  const updateQuantity = quantityInput => {
    setQuantity(quantityInput);
  };
  const updateFrequency = frequencyInput => {
    setFrequency(frequencyInput);
  };
  const updateTiming = timingInput => {
    setTiming(timingInput);
  };
  const updateComments = commentsInput => {
    setComments(commentsInput);
  };
  const handleSubmit = e => {
    const data = {
      classname,
      drugname,
      strength,
      quantity,
      frequency,
      timing,
      comments,
      formulation
    };

    updateMed(data);
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Redirect to="/loggedin/dashboard" />}
      <div className="container bg-light p-4">
        <div className="">
          <header className="mb-3 h3">
            Update Your {drugcategory.categoryname}
          </header>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Name:</label>
            <div className="col">
              <select
                className="form-control"
                name="drugname"
                onChange={e => updateDrugName(e.target.value)}
                value={drugname}
              >
                <option value=""></option>
                {mappeddrugs.map(drug => {
                  return (
                    <option key={drug[1]["name"]} value={drug[0]}>
                      {drug[1]["name"]}
                    </option>
                  );
                })}
                <option value="">None/Not Applicable</option>
              </select>
            </div>
          </div>
          {activedrugname && (
            // {console.log(
            //   "active drug props",
            //   typeof drugsincategory[activedrugname]["strength"]
            // )}
            <div>
              <div className="form-group row">
                <label className="col-form col-sm-2 h4">Strength:</label>

                <div className="col">
                  <select
                    className="form-control"
                    ariaLabel=""
                    name="strength"
                    onChange={e => updateStrength(e.target.value)}
                    value={strength}
                  >
                    <option value=""></option>
                    {Object.entries(
                      drugsincategory[activedrugname]["strength"]
                    ).map(entry => {
                      return (
                        <option key={entry[0]} value={entry[1]}>
                          {entry[1]}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form col-sm-2 h4">Directions:</label>

                <div className="input-group col">
                  <select
                    className="form-control"
                    ariaLabel=""
                    name="quantity"
                    onChange={e => updateQuantity(e.target.value)}
                    value={quantity}
                  >
                    <option value=""></option>
                    {Object.entries(
                      drugsincategory[activedrugname]["quantity"]
                    ).map(entry => {
                      return (
                        <option key={entry[0]} value={entry[1]}>
                          {entry[1]}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="form-control"
                    ariaLabel=""
                    name="frequency"
                    onChange={e => updateFrequency(e.target.value)}
                    value={frequency}
                  >
                    <option value=""></option>
                    {Object.entries(
                      drugsincategory[activedrugname]["frequency"]
                    ).map(entry => {
                      return (
                        <option key={entry[0]} value={entry[1]}>
                          {entry[1]}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="form-control"
                    ariaLabel=""
                    name="timing"
                    onChange={e => updateTiming(e.target.value)}
                    value={timing}
                  >
                    <option value=""></option>
                    {Object.entries(
                      drugsincategory[activedrugname]["timing"]
                    ).map(entry => {
                      return (
                        <option key={entry[0]} value={entry[1]}>
                          {entry[1]}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Comments:</label>

            <div className="col">
              <textarea
                className="form-control"
                onChange={e => updateComments(e.target.value)}
                value={comments}
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
