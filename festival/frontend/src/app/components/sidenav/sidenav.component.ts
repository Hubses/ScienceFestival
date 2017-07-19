import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Component({
    selector: 'sf-sidenav-content',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['./sidenav.component.less'],
    encapsulation: ViewEncapsulation.None
})

export class SidenavComponent implements OnInit {
    @Input() isCollapsed: boolean;
    @Output() public onSidenavCollapse: EventEmitter<boolean> = new EventEmitter<boolean>();

    public iconArrowsType: string = 'keyboard_arrow_right';

    constructor() { }

    ngOnInit() { }
    public collapse(): void {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsed ?
            this.iconArrowsType = 'keyboard_arrow_right' :
            this.iconArrowsType = 'keyboard_arrow_left';
        this.onSidenavCollapse.emit(this.isCollapsed);
    }
}