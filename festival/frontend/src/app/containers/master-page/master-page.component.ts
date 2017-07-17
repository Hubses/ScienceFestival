import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
    selector: 'sf-master-page',
    templateUrl: 'master-page.component.html',
    styleUrls: ['./master-page.component.less'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('collapseChange', [
            state('true',
                style({ width: '96px' }),
            ),
            state('false',
                style({ width: '192px' })
            ),
            transition('* => *', animate('.25s ease-out'))
        ])
    ]
})

export class MasterPageComponent implements OnInit {
    public isNavigationCollapsed: boolean;
    @ViewChild('sidenav') public sidenav: MdSidenav;
    public localization: sf.common.DropdownOptions<string>;

    constructor() { }

    ngOnInit() {
        this.localization = {
            placeholder: 'select languadge',
            values: ['English', 'Russian'],
            selectedValue: 'English'
        };
    }
    public toggleSidenav(): void {
        this.sidenav.toggle();
    }

    onSidenavToggled(): void {
        this.isNavigationCollapsed = !this.isNavigationCollapsed;
    }
    getLocalization(lang: string) {
        console.log(lang);
    }
}
