const express = require("express");
const {
  categoriesCtrl,
  categoryProductCtrl,
} = require("./../controller/products");

const router = express.Router();

router.get("/", categoriesCtrl);
router.get("/products", categoryProductCtrl);

module.exports = router;
