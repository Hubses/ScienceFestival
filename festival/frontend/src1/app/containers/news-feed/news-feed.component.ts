// import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Observable, Subscription } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { go, replace, search, show, back, forward } from '@ngrx/router-store';

// import { getAllNewsAction, editNewsAction, createNewsAction } from '../../../store/news';

// @Component({
//     selector: 'sf-news-feed',
//     templateUrl: 'news-feed.component.html',
//     styleUrls: ['./news-feed.component.less']
// })

// export class NewsFeedComponent implements OnInit, OnDestroy {
//     public items: sf.entities.News[];
//     public allNews$: Observable<sf.store.LoadableObject<sf.entities.News[]>>;
//     public allNewsSubscription: Subscription;


//     constructor(
//         private store: Store<sf.store.NewsStore>
//     ) {
//         this.store.dispatch(getAllNewsAction());
//     }

//     ngOnInit() {
//         this.allNews$ = this.store.select(s => s.newsReducer);
//         this.allNewsSubscription = this.allNews$.subscribe(n => {
//             this.items = n.entity;
//             console.log(this.items);
//         });
//     }
//     ngOnDestroy(): void {
//         this.allNewsSubscription.unsubscribe();
//     }
//     viewEditClick(news: sf.entities.News) {
//         this.store.dispatch(editNewsAction(news));
//         this.store.select(s => s.newsReducer).subscribe(n => {
//             console.log(n.entity);
//         });
//         this.store.dispatch(go(`/en/admin/feed/news/edit/${news.id}`));
//     }
//     createNews() {
//         this.store.dispatch(createNewsAction());
//         this.store.dispatch(go(`/en/admin/feed/news/create`));
//     }
// }
