import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class productListComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {


    pageTitle: string = 'Product List Page';
    imageWidth: number = 100;
    imageMargin: number = 10;
    showImage: boolean = false;
    listFilter: string;
    //injecting service in constructor
    constructor(private _productService: ProductService) {

    }
    products: IProduct[];
    ngOnInit(): void {
        console.log("inside on init()");
       // this.products = this._productService.getProducts();

       //
       this._productService.getProducts().subscribe( products => this.products = products, error=>
            console.log('Error Getting Location: ', error)
          );
      
    };
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        console.log("inside onchanges()")
    };

    ngAfterViewInit(): void {
        console.log("inside after viewinit");
    };
    ngOnDestroy(): void {
        console.log("inside ondestroy()")
    };
    toggleImage(): void {

        this.showImage = !this.showImage;

    };
    onRatingClicked(message: string) {

        this.pageTitle = this.pageTitle + ": " + message;

    }

}