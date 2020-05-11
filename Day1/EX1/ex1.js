"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var SortReversProduction = /** @class */ (function () {
    function SortReversProduction() {
        this.products = new Array();
        this.products.push(new product_1.Product(101, 'P143234', 'C1'));
        this.products.push(new product_1.Product(102, 'P22', 'C2'));
        this.products.push(new product_1.Product(103, 'P3432', 'C3'));
        this.products.push(new product_1.Product(103, 'P3432432523', 'C3'));
    }
    SortReversProduction.prototype.sortByNameLength = function () {
        return this.products.sort(this.orderAssendingLength);
    };
    SortReversProduction.prototype.reveseByNameLength = function () {
        return this.products.sort(this.orderDecendingLength);
    };
    SortReversProduction.prototype.orderDecendingLength = function (a, b) {
        return b.ProdName.length - a.ProdName.length;
    };
    SortReversProduction.prototype.orderAssendingLength = function (a, b) {
        return a.ProdName.length - b.ProdName.length;
    };
    return SortReversProduction;
}());
var orderer = new SortReversProduction();
console.log("--sort--");
console.log(JSON.stringify(orderer.sortByNameLength()));
console.log("--reverse--");
console.log(JSON.stringify(orderer.reveseByNameLength()));
