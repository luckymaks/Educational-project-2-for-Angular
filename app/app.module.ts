import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./index";
import { DataService } from "./service/data.service";
import { ProductsModule } from "./products/products.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductsModule
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
