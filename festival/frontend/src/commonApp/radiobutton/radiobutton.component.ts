import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'sf-common-radio',
    templateUrl: './radiobutton.component.html'
})
export class RadioButtonComponent {
    // @Input() public option: string;
    @Output() public onChenged: string;

    @Input() RadioButtonOptions: [string];

}
