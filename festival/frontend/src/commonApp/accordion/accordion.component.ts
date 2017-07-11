import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'sf-common-accordion',
    templateUrl: './accordion.component.html',
    animations: [
        trigger('collapseChange', [
            state('true',
                style({ height: '0', overflow: 'hidden' }),
            ),
            state('false',
                style({ height: '*' })
            ),
            transition('* => *', animate('.25s ease-in'))
        ]),
        trigger('iconChange', [
            state('true',
                style({ transform: 'rotate( -90deg )' })
            ),
            state('false',
                style({ transform: 'rotate( 0deg )' })
            ),
            transition('* => *', animate('.25s'))
        ])
    ]
})


export class AccordionComponent implements OnInit {

    public isCollapsed: boolean = false;
    constructor() { }

    ngOnInit() { }
}