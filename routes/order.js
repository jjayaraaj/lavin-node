const express = require("express");
const { postNewOrderCtrl } = require("./../controller/order");

const router = express.Router();

router.post("/", postNewOrderCtrl);

module.exports = router;
