const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

const express = require("express");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
