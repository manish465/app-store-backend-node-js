const express = require("express");
const router = express.Router();
const requireSignin = require("../middlewere/requireSignin");

const {
    addProduct,
    getallproduct,
    getoneproduct,
} = require("../controller/products");

router.get("/", getallproduct);
router.get("/:id", getoneproduct);
router.post("/add", requireSignin, addProduct);

module.exports = router;
