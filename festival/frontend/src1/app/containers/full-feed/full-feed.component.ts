import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ɵROUTER_PROVIDERS } from "@angular/router";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'sf-full-feed',
    templateUrl: 'full-feed.component.html',
    styleUrls: ['./full-feed.component.less'],
    providers: [ɵROUTER_PROVIDERS],
    animations: [
        trigger('change', [
            state('true',
                style({ height: '50px' }),
            ),
            state('false',
                style({ height: '100px' })
            ),
            transition('* => *', animate('.25s ease-in'))
        ]),
    ]
})

export class FullFeedComponent implements OnInit {
    public isChange: boolean;
    constructor(
        private zone: NgZone,
        private router: Router
    ) { }

    ngOnInit() { }
    public navigate() {
        this.isChange = !this.isChange;
        this.router.navigateByUrl('en/admin/feed/news');
    }
}