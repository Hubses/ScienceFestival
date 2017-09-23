import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NewsRepository } from '../repository';
import * as news from "../actions/news.actions";
export class newsEffects {
    @Effect()
    getNewsById$: Observable<Action> = this.actions$
        .ofType(news.GET)
        .map(toPayload)
        .switchMap((payload: number) => this.newsRepository.getNewsById(payload)
            .map(result => (new news.GetNewsSuccessAction(result)))
            .catch(() => Observable.of(new news.GetNewsFailureAction())));
    constructor(
        private actions$: Actions,
        private newsRepository: NewsRepository
    ) { }
}