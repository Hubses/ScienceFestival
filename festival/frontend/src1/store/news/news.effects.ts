import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs';

import {
    getNewsAction,
    getAllNewsAction,
    getAllNewsFailureAction,
    getAllNewsSuccessAction,
    getNewsFailureAction,
    getNewsSuccessAction,
    NEWS_ACTION_TYPES
} from './news.actions';

import { NewsRepository } from './news.repository';

@Injectable()
export class NewsEffect {

    @Effect() public getAllNews$: Observable<Action> = this.actions$
        .ofType(NEWS_ACTION_TYPES.GET_ALL)
        .switchMap(() => this.newsRepository.getAllNews()
            .map(results => getAllNewsSuccessAction(results))
            .catch(() => Observable.of(getAllNewsFailureAction())));

    @Effect() public getNews$: Observable<Action> = this.actions$
        .ofType(NEWS_ACTION_TYPES.GET)
        .map(toPayload)
        .switchMap((payload: number) => this.newsRepository.getNewsItemById(payload)
            .map(result => getNewsSuccessAction(result))
            .catch(() => Observable.of(getNewsFailureAction())));

    constructor(
        private actions$: Actions,
        private newsRepository: NewsRepository
    ) { }
}