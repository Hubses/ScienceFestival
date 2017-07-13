import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sf-news',
    templateUrl: 'news.component.html',
    styleUrls: ['./news.component.less']
})

export class NewsComponent implements OnInit {
    @Input() news: News;

    constructor() { }

    ngOnInit() {
    }
}
