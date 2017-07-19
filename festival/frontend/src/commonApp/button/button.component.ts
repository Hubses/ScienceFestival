import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MdButton } from "@angular/material";
@Component({
    selector: 'sf-common-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    public mdButton: MdButton;
    @Output() public onButtonClick: EventEmitter<MdButton> = new EventEmitter();
    constructor() { }
    public buttonClicked(button: MdButton): void {
        this.onButtonClick.emit(button);
    }
}