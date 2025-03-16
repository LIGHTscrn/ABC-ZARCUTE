const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "password") {
    res.json({ success: true, token: "fake-jwt-token" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.post("/api/register", (req, res) => {
    const { username, password } = req.body;
    res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});