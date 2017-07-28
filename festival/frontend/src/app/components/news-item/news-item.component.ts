import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sf-news-item',
    templateUrl: 'news-item.component.html',
    styleUrls: ['./news-item.component.less']
})

export class NewsItemComponent implements OnInit {
    @ViewChild('commonButton') public commonButton: sf.common.Button;
    @Input() news: sf.entities.News;
    @Output() onViewEdit: EventEmitter<sf.entities.News> = new EventEmitter<sf.entities.News>();

    constructor() {
    }

    ngOnInit() {
    }

    viewEdit(news: sf.entities.News) {
        this.onViewEdit.emit(news);
    }
    // onSelect(news: sf.entities.News) {
    //   this.router.navigate(['/en/admin/feed/news', news.id]);
    // }
    //
    // onEdit(news: sf.entities.News) {
    //   this.router.navigate(['/en/admin/feed/news/edit/', news.id]);
    // }
}
