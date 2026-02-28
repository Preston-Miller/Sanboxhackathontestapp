/**
 * Simple Express app - test fixture for VibeSec scanner.
 * Uses vulnerable body-parser for dependency scan testing.
 */

const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // vulnerable when extended: true
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "VibeSec test app - do not use in production",
    env: process.env.NODE_ENV || "development",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Test app listening on port ${PORT}`);
  // Config is loaded (secrets in config.js trigger hardcoded-secret scanner)
  if (process.env.DEBUG) console.log("Config loaded:", Object.keys(config));
});
