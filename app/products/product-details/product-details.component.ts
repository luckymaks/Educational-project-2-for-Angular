import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Products } from "../../service/products";
import { DataService } from "../../service/data.service";

@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.component.html"
})
export class ProductDetailsComponent implements OnInit {
    product: Products;
    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {};

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.dataService
                .getDataId(id)
                .then(result => this.product = result);
        });
    }
    goToPhrasesList() {
        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }
}