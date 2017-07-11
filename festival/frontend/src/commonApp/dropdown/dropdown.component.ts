import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

    @Input() public dropdownOptions: sf.common.DropdownOptions;

    public selectedValue: string;

    constructor() { }

    ngOnInit(): void {
    }

}
