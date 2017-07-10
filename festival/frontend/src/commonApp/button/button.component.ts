import { Component,Input } from '@angular/core';

@Component({
    selector: 'sf-common-button',
    templateUrl: './button.component.html'
})
export class ButtonComponent {
@Input() public buttonName: string;
}   