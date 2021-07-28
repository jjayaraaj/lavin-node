const express = require("express");

const router = express.Router();

const { customerDetailsCtrl } = require("./../controller/customer");

router.post("/email", customerDetailsCtrl);

module.exports = router;
