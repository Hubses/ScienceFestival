import { Component, Input } from '@angular/core';

@Component({
    selector: 'sf-common-inputNumb',
    templateUrl: './inputNumb.component.html'
})
export class InputNumbComponent {
    @Input() public value?: number;
}