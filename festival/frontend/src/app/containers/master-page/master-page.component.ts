import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material'
@Component({
    selector: 'sf-master-page',
    templateUrl: 'master-page.component.html',
    styleUrls: ['./master-page.component.less']
})

export class MasterPageComponent implements OnInit {
    public sidenavOpened: boolean = true;
    @ViewChild('sidenav') public sidenav: MdSidenav;

    public localization: sf.common.DropdownOptions;

    constructor() { }

    ngOnInit() {
        this.localization = {
            placeholder: 'select languadge',
            values: ['English', 'Russian'],
            selectedValue: 'English'
        }
    }
    public toggleSidenav() {
        this.sidenav.toggle();
    }
    public getLocalization(option: string): void {
        console.log(option);
    }
}