import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class productListComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy{
  
 
   
    
    pageTitle: string = 'Product List Page';
    imageWidth: number = 100;
    imageMargin: number = 10;
    showImage: boolean = false;
    listFilter: string = "Sriram";
    products: IProduct[] = [{

        "productId": 1,
        "productName": "Lock",
        "productCode": "Lock-1",
        "availability": "March 12,2020",
        "price": 20.0,
        "description": "Lock image",
        "starRating": 3.5,
        "imageUrl": "http://clipart-library.com/images/5iRXR7gRT.jpg"
    }, {
        "productId": 2,
        "productName": "Penguin",
        "productCode": "Penguin-1",
        "availability": "March 1,2020",
        "price": 24.0,
        "description": "Penguin image",
        "starRating": 4.4,
        "imageUrl": "http://clipart-library.com/images/BcaE5KEXi.png"
    }, {
        "productId": 3,
        "productName": "Rose",
        "productCode": "Rose-1",
        "availability": "March 5,2020",
        "price": 50.0,
        "description": "Rose image",
        "starRating": 4.9,
        "imageUrl": "http://clipart-library.com/newimages/rose-clip-art-1.png"
    }
    ];
    ngOnInit(): void {
       console.log("inside on init()");
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

    }

}