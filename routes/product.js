const express = require("express");
const { productsCtrl, featuredCtrl } = require("./../controller/products");

const router = express.Router();

router.get("/", productsCtrl);
router.get("/featured", featuredCtrl);

module.exports = router;
