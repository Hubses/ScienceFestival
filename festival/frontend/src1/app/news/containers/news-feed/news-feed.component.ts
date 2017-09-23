import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromNews from "../../reducers/news.reducer";
import * as news from '../../actions/news.actions';
import * as fromNewsCollection from '../../reducers/news.collection.reducer';
import * as newsCollection from '../../actions/news.collection.actions';
import { Observable } from "rxjs/Rx";

@Component({
	selector: 'news-feed',
	templateUrl: 'news-feed.component.html'
})

export class NewsFeedComponent implements OnInit {
	public newsCollection$: Observable<sf.entities.News[]>;
	constructor(private store: Store<fromNewsCollection.State>) { }
	ngOnInit() {
		this.newsCollection$ = this.store.select(s => s.entities);
		this.store.dispatch(new newsCollection.GetNewsCollectionAction());
	}
}