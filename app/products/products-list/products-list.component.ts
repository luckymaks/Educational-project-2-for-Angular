import { Component, OnInit  } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Products } from "../../service/products";
import { DataService } from "../../service/data.service";

@Component({
    moduleId: module.id,
    selector: "products-list",
    templateUrl: "products-list.component.html",
    styleUrls: ["products-list.component.css"]
})
export class ProductsListComponent implements OnInit{
    selectedId: number;
    public ProductsList: Products[];
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private dataService: DataService) {}
    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params["id"];
            this.dataService
                .getAll()
                .then(result => this.ProductsList = result);
        });
    }
    isSelected(ProductsList) {
        return ProductsList.id == this.selectedId;
    }
    onSelect(ProductsList) {
        this.router.navigate(["/products", ProductsList.id]);
    }
}
