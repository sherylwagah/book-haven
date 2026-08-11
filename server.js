const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // make sure your HTML is in "public" folder

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // leave empty if no password
  database: "library"
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Route to add book
app.post("/api/addbook", (req, res) => {
  const { book, author, synopsis } = req.body;

  const sql = "INSERT INTO books (book, author, synopsis) VALUES (?, ?, ?)";
  
  db.query(sql, [book, author, synopsis], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error saving book");
    } else {
      res.send("Book added successfully");
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.get("/api/books",(req,res)=>{
    const sql = "SELECT* FROM books";
    db.query(sql, (err,results)=>{
        if (err){
            console.log(err);
            res.send("Error fecting books");
        }else{
            res.json(results);
        }
    })
})