const express = require("express");

const router = express.Router();

const { loginCtrl } = require("./../controller/auth");

router.post("/", loginCtrl);

module.exports = router;
