import { Component, Input, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

    public selectedValue: string;
    @Input() public dropdownOptions: sf.common.DropdownOptions;

    @Output() selectedValueChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(){
         this.selectedValue = this.dropdownOptions.selectedValue;
    }

    onSelectedValueChange(newValue: string) {
        this.selectedValueChange.emit(newValue);
    }
}
