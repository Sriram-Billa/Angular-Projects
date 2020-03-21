import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',

})
export class Welcome implements OnInit {

    pageHeader:string = "Welcome Page";
    constructor() { }

    ngOnInit(): void {

    }

}
