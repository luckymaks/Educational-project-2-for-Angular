"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../../service/data.service");
var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(router, activatedRoute, dataService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.selectedId = +params["id"];
            _this.dataService
                .getAll()
                .then(function (result) { return _this.ProductsList = result; });
        });
    };
    ProductsListComponent.prototype.isSelected = function (ProductsList) {
        return ProductsList.id == this.selectedId;
    };
    ProductsListComponent.prototype.onSelect = function (ProductsList) {
        this.router.navigate(["/products", ProductsList.id]);
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "products-list",
            templateUrl: "products-list.component.html",
            styleUrls: ["products-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            data_service_1.DataService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map