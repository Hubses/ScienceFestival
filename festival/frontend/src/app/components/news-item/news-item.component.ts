import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sf-news-item',
    templateUrl: 'news-item.component.html',
    styleUrls: ['./news-item.component.less']
})

export class NewsItemComponent implements OnInit {
    @Input() news: sf.entities.News;

    public flag: boolean = false;

    constructor() { }

    ngOnInit() {
    }
}
