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
                style({ width: '166px' })
            ),
            transition('* => *', animate('.25s ease-in'))
        ]),
        trigger('iconChange', [
            state('true',
                style({ transform: 'rotate( -180deg )' })
            ),
            state('false',
                style({ transform: 'rotate( 0deg )' })
            ),
            transition('* => *', animate('.25s'))
        ])
    ]
})

export class MasterPageComponent implements OnInit {

    public isNormalSidenav: boolean = true;
    @ViewChild('sidenav') public sidenav: MdSidenav;

    public localization: sf.common.DropdownOptions;

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
    public getLocalization(option: string): void {
        console.log(option);
    }
}
