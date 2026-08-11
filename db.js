const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",       // usually localhost
  user: "root",            // your MySQL username
  password: "",            // your MySQL password (empty if none)
  database: "library"      // name of your database
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = db;