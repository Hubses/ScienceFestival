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
            transition('* => *', animate('.25s ease-in'))
        ])
    ]
})

export class MasterPageComponent implements OnInit {

    public isCollapsed: boolean = true;
    @ViewChild('sidenav') public sidenav: MdSidenav;

    constructor() { }

    ngOnInit() { }
    public toggleSidenav(): void {
        this.sidenav.toggle();
    }

    collapseSidenav(): void {
        this.isCollapsed = !this.isCollapsed;
        console.log(this.isCollapsed);
    }
}
