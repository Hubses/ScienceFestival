import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-checkbox',
    templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
    @Input() public label: string;
    @Input() public value: boolean;

    @Output() valueChange = new EventEmitter<boolean>();
    
    onChanged(newValue) {
        this.value = newValue;
        this.valueChange.emit(this.value);
    }
}
