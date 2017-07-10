import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sf-common-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnChanges {


    @Input() public dropdownOptions: sf.common.DropdownOptions;
    @Output() public onSelectedChange: EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
            console.log(changes);
            debugger;
        }
    }
}
