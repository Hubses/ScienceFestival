import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-inputNumb',
    templateUrl: './inputNumb.component.html'
})
export class InputNumbComponent {
    @Input() public value: number;

     @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

ngOnInit(): void {
        if (!this.value) {
            this.value = null;
        }
    }

     onValueChanged(newValue) {
        this.value = newValue;
        this.valueChange.emit(newValue);
    }

}