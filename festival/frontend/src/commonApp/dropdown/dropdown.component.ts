import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sf-common-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit, OnChanges {


    @Input() public selectedValue: string;
    @Input() public dropdownOptions: sf.common.DropdownOptions;

    @Output() onSelected: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['dropdownOptions'].currentValue !== changes['dropdownOptions'].previousValue) {
            this.onSelected.emit(this.selectedValue);
        }
    }

    // public select(dropdownValue: string): void {
    //     this.onSelected.emit(dropdownValue);
    // }
}
