import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sf-common-tab',
    templateUrl: 'tab.component.html'
})

export class TabComponent implements OnInit {

    @Input() public tab: sf.common.Tab;

    constructor() { }

    ngOnInit() {
        console.log(this.tab.title);
    }
}