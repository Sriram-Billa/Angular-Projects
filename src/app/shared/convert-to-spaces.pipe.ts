import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

    name: "convertToSpace",


})

export class convertToSpaces implements PipeTransform {
    
    transform(value:string,character:string):string {
        console.log(value+" "+character)
        return value.replace(character," ");
    }

}