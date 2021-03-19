const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth");

router.use("/api", require("./api"));

module.exports = router;
