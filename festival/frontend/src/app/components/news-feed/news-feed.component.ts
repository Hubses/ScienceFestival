import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getNewsAction } from '../../../store/news/';

@Component({
    selector: 'sf-news-feed',
    templateUrl: 'news-feed.component.html',
    styleUrls: ['./news-feed.component.less']
})
export class NewsFeedComponent implements OnInit {

    public news: News[];

    constructor(private store: Store<sf.store.NewsStore>) { }

    ngOnInit(): void {
      this.store.select(s => s.newsReducer).subscribe(n => this.news = n.entity);
      this.store.dispatch(getNewsAction());
    }
}
