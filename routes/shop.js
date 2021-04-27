const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Tienda Pug",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    formsCSS: true,
  });
});

module.exports = router;
