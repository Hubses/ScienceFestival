import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getNewsAction} from '../news';

// @Injectable
// export class NewsDetailRepository {
//
//   constructor(private store: Store<sf.store.NewsStore>) {
//   }
//
//   getNewsItemById(id: number): Observable<News> {
//     let news: News[];
//
//     this.store.select(s => s.newsReducer).subscribe(n => news = n.entity);
//     this.store.dispatch(getNewsAction());
//
//     let newsItem: News = news.find(n => n.id == id);
//     return Observable.of(newsItem);
//   }
// }
