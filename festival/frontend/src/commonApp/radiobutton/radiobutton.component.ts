import { Component,Input } from '@angular/core';

@Component({
    selector: 'sf-common-radio',
    templateUrl: './radiobutton.component.html'
})
export class RadioButtonComponent { 
    @Input() public nameRadioButton: string;
}
