import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Pipe } from '@angular/core';


@Component({
    selector: 'sf-common-tabs',
    templateUrl: './tabs.component.html',
})
export class TabGroupComponent implements OnInit {


    @Input() public tabs: sf.common.Tab[];

    constructor() { }

    ngOnInit(): void {
    }

    public trackById(index: number, tab: sf.common.Tab): number {
        return tab.id;
    }
}
