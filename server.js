const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Data@2026",
    database: "campus_navigation"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("MySQL Database Connected!");
    }
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Campus Navigation Backend is Running!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});