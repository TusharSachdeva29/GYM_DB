const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Default XAMPP username
  password: "", // Default XAMPP password
  database: "gymdb2",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error:", err.message);
  } else {
    console.log("Connected to MySQL Database!");
  }
});

module.exports = db;
