const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    // Si hay error - retorno vacio
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this); // Agrego el nuevo valor
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("Error: ", err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
