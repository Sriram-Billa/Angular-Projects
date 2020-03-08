import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';
import { productListComponent } from './product-list.component';


@Pipe({

    name: "productFilter"


})



export class productFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;


        return filterBy ?
            value.filter((product: IProduct) => 
            (product.productName.toLocaleLowerCase().indexOf(filterBy) >= 0) || product.productCode.toLocaleLowerCase().indexOf(filterBy)>=0)
             : value;
    }

}