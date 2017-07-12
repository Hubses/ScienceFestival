import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sf-master-page',
    templateUrl: 'master-page.component.html',
    styleUrls: ['./master-page.component.less']
})

export class MasterPageComponent implements OnInit {

    public localization: sf.common.DropdownOptions;

    constructor() { }

    ngOnInit() {
        this.localization = {
            placeholder: 'select languadge',
            values: ['English', 'Russian'],
            selectedValue: ''
        }
    }
}