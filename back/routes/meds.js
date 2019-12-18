var express = require("express");
var router = express.Router();
const medModel = require("../models/medModel");
const withAuth = require("../middleware");

router.get("/", withAuth, async function(req, res, next) {
  const user_id = req.user_id;
  console.log("get route user id", user_id);
  const all = await medModel.getAllMeds(user_id);
  res.json(all);
});

router.post("/addmed", withAuth, async (req, res) => {
  const user_id = req.user_id;
  console.log("post route user id", user_id);
  const {
    classname,
    drugname,
    strength,
    quantity,
    frequency,
    timing,
    comments,
    formulation,
    update_route
  } = req.body;

  const new_med = new medModel(
    user_id,
    classname,
    drugname,
    strength,
    quantity,
    frequency,
    timing,
    comments,
    formulation,
    update_route
  );
  const addedMed = await new_med.addMed(user_id);

  if (addedMed) {
    console.log("added med");
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

router.post("/update", withAuth, async (req, res) => {
  const user_id = req.user_id;
  console.log("post route user id", user_id);
  const {
    classname,
    drugname,
    strength,
    quantity,
    frequency,
    timing,
    comments,
    formulation
  } = req.body;

  const new_med = new medModel(
    user_id,
    classname,
    drugname,
    strength,
    quantity,
    frequency,
    timing,
    comments,
    formulation
  );
  const updatedMed = await new_med.updateMed(user_id);

  if (updatedMed) {
    console.log("updated med");
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
