import { Component, Input, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';


@Component({
    selector: 'sf-common-tabs',
    templateUrl: './tabs.component.html',
})
export class TabGroupComponent implements OnInit {

    @Input() public tabs: sf.common.Tab[];

    constructor() { }

    ngOnInit(): void {
        console.log(this.tabs)
    }
    public trackById(index: number, tab: sf.common.Tab): number {
        return tab.id;
    }
}
