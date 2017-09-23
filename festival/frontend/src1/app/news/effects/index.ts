import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NewsRepository } from '../repository';
import * as news from "../actions/news.actions";
import * as newsCollection from "../actions/news.collection.actions";
export class newsEffects {
    @Effect()
    getAllNews$: Observable<Action> = this.actions$
        .ofType(newsCollection.GET)
        .map(toPayload)
        .switchMap(() => this.newsRepository.getAllNews()
            .map(results => (new newsCollection.GetNewsCollectionSuccessAction(results)))
            .catch(() => Observable.of(new newsCollection.GetNewsCollectionFailureAction('failed to get news collection'))));

    @Effect({ dispatch: false })
    getAllNewsFail$: Observable<Action> = this.actions$
        .ofType(newsCollection.GET_FAILURE)
        .do((action: newsCollection.GetNewsCollectionFailureAction) => console.error(action.payload));

    // @Effect()
    // getNewsId$: Observable<sf.entities.News> = this.actions$
    //     .ofType(news.GET)
    //     .switchMap((action) => this.newsRepository.getNewsById(action.payload)
    //         .map((results) => (new news.GetNewsSuccessAction(results)))
    //         .catch(() => Observable.of(new news.GetNewsFailureAction('Failure to get news'))));
    constructor(
        private actions$: Actions,
        private newsRepository: NewsRepository
    ) { }
}