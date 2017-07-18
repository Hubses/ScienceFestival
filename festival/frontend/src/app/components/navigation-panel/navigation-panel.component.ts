import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Component({
    selector: 'sf-navigation-panel',
    templateUrl: 'navigation-panel.component.html',
    styleUrls: ['./navigation-panel.component.less'],
    encapsulation: ViewEncapsulation.None
})

export class NavigationPanelComponent implements OnInit {
    @Input() public isOpen: boolean;
    @Input() isToggled: boolean;
    @Output() public onSidenavToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
    public iconArrowsType: string = 'keyboard_arrow_right';

    constructor() { }
    ngOnInit() { }
    public collapse(): void {
        this.isToggled = !this.isToggled;
        this.isToggled ?
            this.iconArrowsType = 'keyboard_arrow_right' :
            this.iconArrowsType = 'keyboard_arrow_left';
        this.onSidenavToggled.emit(this.isToggled);
    }
}
