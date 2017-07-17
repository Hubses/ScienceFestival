import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-input',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
    @Input() isSecure?: boolean;

    @Input() placeholder: string;
    @Input() public value: string;

    @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
    
    constructor() { }

    ngOnInit(): void {
        if (!this.value) {
            this.value = '';
        }
    }
    valueChange(newValue) {
        this.value = newValue;
        this.onValueChange.emit(newValue);
    }
    getType(): string {
        let inputType: string;
        this.isSecure ? inputType = 'password' : inputType = 'text';
        return inputType;
    }
}