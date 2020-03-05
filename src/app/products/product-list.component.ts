import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class productListComponent {
    pageTitle: string = 'Product List Page';
    imageWidth: number = 100;
    imageMargin: number = 10;
    showImage: boolean = false;
    listFilter:string = "Sriram";
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
    }
    ]

    toggleImage(): void {

        this.showImage = !this.showImage;

    }

}