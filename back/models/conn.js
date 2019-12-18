const pgp = require("pg-promise")({
  query: function(e) {
    console.log("QUERY:", e.query);
  }
});

// const options = {
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD
// };

const options = {
  host: "localhost",
  database: "hearts"
};

const db = pgp(options);

module.exports = db;
