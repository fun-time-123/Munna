const express = require("express");
const router = express.Router();
const analyzeStock = require("../controllers/analyzeController");

router.post("/", analyzeStock);

module.exports = router;