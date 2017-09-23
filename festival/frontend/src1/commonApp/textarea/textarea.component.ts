import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-textarea',
    templateUrl: 'textarea.component.html'
})

export class TextAreaComponent implements OnInit {

    @Input() public placeholder: string;
    @Input() public value: string;
    @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>()

    constructor() { }

    ngOnInit() { }
    public onValueChange(newValue: string): void {
        this.valueChange.emit(newValue);
    }
}
