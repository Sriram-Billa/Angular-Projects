import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({

    selector: "pm-star",
    templateUrl: "star.component.html",
    styleUrls: ["./star.component.css"]

})

export class starComponent implements OnChanges {

    @Input() rating: number;
    starContainerWidth: number;

    //generate custom event
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {

        this.starContainerWidth = this.rating * 75 / 5;
        console.log("the calculated width: ", this.starContainerWidth);
    }

    OnClick(): void {

        console.log(`Rating::  ${this.rating} is clicked`);
        this.ratingClicked.emit(`Rating::  ${this.rating} is clicked`);

    }

}