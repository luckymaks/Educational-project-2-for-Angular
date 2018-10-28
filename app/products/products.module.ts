import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsListComponent, ProductDetailsComponent } from "../index";

import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule // настройки маршрутизации для модуля PhrasesModule
    ],
    declarations: [
        ProductsListComponent,
        ProductDetailsComponent
    ]
})
export class ProductsModule { }