import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sf-common-button',
    templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input() public label: string;
}