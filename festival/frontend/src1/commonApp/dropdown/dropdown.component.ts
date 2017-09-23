import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

    public selectedValue: any;
    @Input() public dropdownOptions: sf.common.DropdownOptions<any>;

    @Output() selectedValueChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        this.selectedValue = this.dropdownOptions.selectedValue;
    }

    onSelectedValueChange(newValue: any) {
        this.selectedValue = newValue;
        this.selectedValueChange.emit(newValue);
    }
}
