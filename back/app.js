const express = require("express");
const bcrypt = require("bcryptjs");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const helmet = require("helmet");
const FileStore = require("session-file-store")(session);
const es6Renderer = require("express-es6-template-engine"); //for testing
const cors = require("cors");

require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var medRouter = require("./routes/meds");
var verifyRouter = require("./routes/logincheck");
const app = express();

var whitelist = [process.env.WHITE_LIST];
var corsOptions = {
  origin: function(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/meds", medRouter);
app.use("/verify", verifyRouter);

module.exports = app;
