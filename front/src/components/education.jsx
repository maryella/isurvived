import React from "react";

const Druglist = require("../util/drugs.json");

const Education = ({ category }) => {
  const drugcategory = Druglist[category];

  const classname = drugcategory.categoryname;
  const info = drugcategory.information;

  return (
    <>
      <div className="container bg-light p-4 rounded">
        <div>
          <h1 className="contentheader mb-3">{classname}</h1>
          <hr />
        </div>
        {/* Use DSIH to allow for markup in JSON data */}
        <div dangerouslySetInnerHTML={{ __html: info }} />
      </div>
    </>
  );
};

export default Education;
