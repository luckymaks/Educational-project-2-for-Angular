import { Injectable } from "@angular/core";
import {Products} from "./products";
let ProdArr = [
    new Products(1, "Product 1", 100),
    new Products(2, "Product 2", 200),
    new Products(3, "Product 3", 300),
    new Products(4, "Product 4", 400),
    new Products(5, "Product 5", 500),
    new Products(6, "Product 6", 600),
    new Products(7, "Product 7", 700),
    new Products(8, "Product 8", 800),
    new Products(9, "Product 9", 900),
    new Products(10, "Product 10", 1000)
];
let productsPromise = Promise.resolve(ProdArr);

@Injectable()
export class DataService {
    getAll(): Promise<Products[]> {
        return productsPromise;
    }
    getDataId(id: number): Promise<Products> {
        return productsPromise
            .then(products => products.find(x => x.id == id));
    }
}

