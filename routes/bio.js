const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/addbook", (req, res) => {

  const { book, author, synopsis } = req.body;

  const sql = "INSERT INTO books (book, author, synopsis) VALUES (?, ?, ?)";

  db.query(sql, [book, author, synopsis], (err, result) => {

    if (err) {
      res.send("Error saving book");
    } else {
      res.send("Book added successfully");
    }

  });

});

module.exports = router;