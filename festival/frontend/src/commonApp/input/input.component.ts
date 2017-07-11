import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-input',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {


    @Input() public value?: string;

    constructor() { }

    ngOnInit(): void {
        if (!this.value) {
            this.value = '';
        }
    }
}
