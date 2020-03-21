import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { convertToSpaces } from './shared/convert-to-spaces.pipe';
import { productFilterPipe } from './products/product-filter.pipe';
import { starComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetail } from './products/product-detail.component';
import { Welcome } from './shared/welcome.component';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, productListComponent, convertToSpaces, productFilterPipe,
    starComponent, ProductDetail, Welcome
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




}
