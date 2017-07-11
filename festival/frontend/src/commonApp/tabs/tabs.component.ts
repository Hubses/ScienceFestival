import { Component, Input } from '@angular/core';
import { Pipe } from '@angular/core';


@Component({
    selector: 'sf-common-tabs',
    templateUrl: './tabs.component.html',
})
export class TabGroupComponent {


    @Input() public tabs: sf.common.Tab[];

    constructor() { }

    public trackById(index: number, tab: sf.common.Tab): number {
        return tab.id;
    }
}
