import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sf-festivalEvent-item',
    templateUrl: 'festivalEvent-item.component.html',
    styleUrls: ['./festivalEvent-item.component.less']
})

export class FestivalEventItemComponent implements OnInit {
    @Input() festivalEvent:  FestivalEvent;

    public flag: boolean = false;

    constructor() { }

    ngOnInit() {
    }
}
