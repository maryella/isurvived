var express = require("express");
var router = express.Router();

const withAuth = require("../middleware");
//const SecureModel = require("../models/secureModel");
/* GET home page. */

router.get("/", withAuth, async function(req, res, next) {
  console.log("req id:", req.user_id);
  res.sendStatus(200);
});

module.exports = router;
