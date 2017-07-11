import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'sf-common-input',
    templateUrl: './input.component.html'
})
export class InputComponent implements AfterViewInit {

    @Input() public value?: string;

    constructor() { }

    ngAfterViewInit(): void {
        if (!this.value) {
            this.value = '';
        }
    }
}
