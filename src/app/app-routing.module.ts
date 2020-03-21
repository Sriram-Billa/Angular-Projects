import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { productListComponent } from './products/product-list.component';
import { ProductDetail } from './products/product-detail.component';
import { Welcome } from './shared/welcome.component';


const routes: Routes = [
    { path: "products", component: productListComponent },
    { path: "products/:id", component: ProductDetail },
    { path: "welcome", component: Welcome },
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "**", redirectTo: "welcome", pathMatch: "full" }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {


}