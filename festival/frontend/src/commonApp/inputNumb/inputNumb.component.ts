import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-inputNumb',
    templateUrl: './inputNumb.component.html'
})
export class InputNumbComponent {
    @Input() public value: number;
    @Input() public minValue?: number;
    @Input() public maxValue?: number;

    @Output() onValueChange: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        if (!this.value) {
            this.value = null;
        }
    }

    valueChange(newValue) {
        this.value = newValue;
        this.onValueChange.emit(newValue);
    }

}