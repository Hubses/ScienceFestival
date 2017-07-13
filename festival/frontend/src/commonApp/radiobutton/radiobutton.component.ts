import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-radio',
    templateUrl: './radiobutton.component.html'
})
export class RadioButtonComponent { 
    @Input() public option: string;
    @Input() public value: boolean;
    @Input() public options= [];

    @Output() valueChange = new EventEmitter<boolean>();
    
    onChanged(newValue) {
        this.value = newValue;
        this.valueChange.emit(this.value);
    }
}
