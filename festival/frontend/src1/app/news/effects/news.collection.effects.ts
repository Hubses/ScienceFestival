import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NewsRepository } from '../repository';
import * as newsCollection from "../actions/news.collection.actions";
export class newsCollectionEffects {
    @Effect()
    getAllNews$: Observable<Action> = this.actions$
        .ofType(newsCollection.GET)
        .map(toPayload)
        .switchMap(() => this.newsRepository.getAllNews()
            .map(result => (new newsCollection.GetNewsCollectionSuccessAction()))
            .catch(() => Observable.of(new newsCollection.GetNewsCollectionFailureAction()))
        );
    constructor(
        private actions$: Actions,
        private newsRepository: NewsRepository
    ) { }
}