import { Injectable } from "@angular/core";
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import "rxjs/"
@Injectable()

export class ProductService {

    private _productURL = "http://localhost:8080/restfuljersey/rest/hello/products";

    //http instance is created
    constructor(private _http: HttpClient) {



    }
    //of type observable as container to hold IProduct type of data
    getProducts(): Observable<IProduct[]> {
        console.log('called');
        return this._http.get<IProduct[]>(this._productURL);
       
    }

    private handleError(err:HttpErrorResponse){

        console.log(err.message)

    }


}