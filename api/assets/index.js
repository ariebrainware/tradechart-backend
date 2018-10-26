const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/",controller.show)
router.get("/chart-data", controller.chartData)
module.exports = router