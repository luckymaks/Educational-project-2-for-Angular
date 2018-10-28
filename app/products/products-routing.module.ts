import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductsListComponent, ProductDetailsComponent } from "../index";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/products",
                pathMatch: "full"
            },
            {
                // Для того, чтобы компонент отображался в router-outlet PhraseHomeComponent, a не в AppComponent
                // необходимо выполнить настройку дочерних маршрутов с помощью инициализации свойства children
                path: "products",
                component: ProductsListComponent, // содержит <router-outlet>
                children: [
                            {
                                path: ":id",
                                component: ProductDetailsComponent
                            },
                            {
                                path: "",
                                component: ProductDetailsComponent
                            }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule { }
