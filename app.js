const express = require("express");
const escapeHtml = require("escape-html"); 
const app = express();
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.get("/", (req, res) => {
    res.send(`
        <form action="/search" method="GET">
            <input type="text" name="query" placeholder="Enter your search">
            <button type="submit">Search</button>
        </form>
    `);
});
app.get("/search", (req, res) => {
    const query = req.query.query;
    
    // Simulated SQL injection vulnerability 
    const sqlQuery = `SELECT * FROM users WHERE name = '${query}'`; 
    // XSS vulnerability remains
    res.send(`<h1>Results for: ${query}</h1>`); 
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});










