import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-input',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

    @Input() placeholder: string;
    @Input() public value: string;

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void {
        if (!this.value) {
            this.value = '';
        }
    }
    onValueChange(newValue) {
        this.valueChange.emit(newValue);
    }
}
