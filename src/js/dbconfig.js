//Підключення до бази данних

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#dontWorry12#",
  database: "sup",
});

module.exports = db;
