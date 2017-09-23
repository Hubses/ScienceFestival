import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'sf-common-accordion',
    templateUrl: './accordion.component.html',
    animations: [
        trigger('collapseChange', [
            state('true',
                style({ height: '*' }),
            ),
            state('false',
                style({ height: '0', overflow: 'hidden' })
            ),
            transition('* => *', animate('.25s ease-in'))
        ]),
        trigger('iconChange', [
            state('true',
                style({ transform: 'rotate( 0deg )' })
            ),
            state('false',
                style({ transform: 'rotate( -90deg )' })
            ),
            transition('* => *', animate('.25s'))
        ])
    ]
})

export class AccordionComponent implements OnInit {

    @Input() public isCollapsed: boolean;
    constructor() { }

    ngOnInit() { }
}