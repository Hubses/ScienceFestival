import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'sf-common-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements AfterViewInit {

    @Input() public header: string;
    @Input() public footer: string;

    ngAfterViewInit(): void {
    }
}
