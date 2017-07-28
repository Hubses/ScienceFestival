import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { go, replace, search, show, back, forward } from '@ngrx/router-store';

import { getNewsAction, editNewsAction } from '../../../store/news';

@Component({
    selector: 'sf-news-feed',
    templateUrl: 'news-feed.component.html',
    styleUrls: ['./news-feed.component.less']
})

export class NewsFeedComponent implements OnInit {


    public items: sf.entities.News[];


    constructor(
        private store: Store<sf.store.NewsStore>) {
    }


    ngOnInit() {
        this.store.select(s => s.newsReducer).subscribe(n => this.items = n.entity);
        this.store.dispatch(getNewsAction());
    }
    viewEditClick(news: sf.entities.News) {
        this.store.dispatch(editNewsAction(news));
        this.store.select(s => s.newsReducer).subscribe(n => {
            console.log(n.entity);
        });
        this.store.dispatch(go(`/en/admin/feed/news/edit/${news.id}`));
    }
}
