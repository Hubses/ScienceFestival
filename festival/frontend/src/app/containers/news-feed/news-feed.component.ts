import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getNewsAction, editNewsAction } from '../../../store/news';

@Component({
    selector: 'sf-news-feed',
    templateUrl: 'news-feed.component.html',
    styleUrls: ['./news-feed.component.less']
})

export class NewsFeedComponent implements OnInit {

    public items: sf.entities.News[];

    constructor(private store: Store<sf.store.NewsStore>) { }

    ngOnInit() {
        this.store.select(s => s.newsReducer).subscribe(n => this.items = n.entity);
        this.store.dispatch(getNewsAction());
        console.log(this.items);
    }
    viewDetailClick() {
        this.store.dispatch(editNewsAction());
    }
}
