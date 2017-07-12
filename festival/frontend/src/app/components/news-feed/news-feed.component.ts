import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getNewsAction } from '../../../store/news/';
import { ChangeEvent, VirtualScrollComponent } from 'angular2-virtual-scroll';
@Component({
    selector: 'sf-news-feed',
    templateUrl: 'news-feed.component.html'
})

export class NewsFeedComponent implements OnInit {

    public items: News[];

    constructor(private store: Store<sf.store.NewsStore>) { }

    ngOnInit() {
        this.store.select(s => s.newsReducer).subscribe(n => this.items = n.entity);
        this.store.dispatch(getNewsAction());
        console.log(this.items);
    }
}