import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sf-common-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent {


    @Input() public selectedValue: string;
    @Input() public dropdownOptions: sf.common.DropdownOptions;

    @Output() selectedValueChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }
    onSelectedValueChange(newValue: string) {
        this.selectedValueChange.emit(newValue);
    }
}
