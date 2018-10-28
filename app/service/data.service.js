"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_1 = require("./products");
var ProdArr = [
    new products_1.Products(1, "Product 1", 100),
    new products_1.Products(2, "Product 2", 200),
    new products_1.Products(3, "Product 3", 300),
    new products_1.Products(4, "Product 4", 400),
    new products_1.Products(5, "Product 5", 500),
    new products_1.Products(6, "Product 6", 600),
    new products_1.Products(7, "Product 7", 700),
    new products_1.Products(8, "Product 8", 800),
    new products_1.Products(9, "Product 9", 900),
    new products_1.Products(10, "Product 10", 1000)
];
var productsPromise = Promise.resolve(ProdArr);
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getAll = function () {
        return productsPromise;
    };
    DataService.prototype.getDataId = function (id) {
        return productsPromise
            .then(function (products) { return products.find(function (x) { return x.id == id; }); });
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map