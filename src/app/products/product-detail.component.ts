import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { IProduct } from './product';

@Component({
  selector: 'app-product-detail.component',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetail implements OnInit {

  pageTitle: string = "Product Description Page";
  product: IProduct;


  constructor(private _route: ActivatedRoute, private _router: Router) {


  }

  ngOnInit(): void {

    let id = +this._route.snapshot.paramMap.get("id");
    //let id= this._route.snapshot.params['id'];
    this.pageTitle += `>>>>>>  ${id}`;
    
    this.product =
    {
      "productCode": "Rose-1",
      "productId": 3,
      "price": 50.0,
      "imageUrl": "http:\/\/clipart-library.com\/newimages\/rose-clip-art-1.png",
      "description": "Rose image",
      "availability": "March 5,2020",
      "starRating": 4.9,
      "productName": "Rose"
    }

  };
  onBackPress(): void{

    this._router.navigate(["/products"]);
  
  }



}
