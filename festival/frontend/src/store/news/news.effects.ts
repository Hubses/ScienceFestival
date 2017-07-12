import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs';

import { getNewsAction, getNewsFailureAction, getNewsSuccessAction, NEWS_ACTION_TYPES } from './news.actions';

import { NewsRepository } from './news.repository';

@Injectable()
export class NewsEffect {

    @Effect() public getNews$: Observable<Action> = this.actions$
        .ofType(NEWS_ACTION_TYPES.GET)
        .switchMap(() => this.newsRepository.getNews()
            .map(results => getNewsSuccessAction(results))
            .catch(() => Observable.of(getNewsFailureAction())));

    constructor(
        private actions$: Actions,
        private newsRepository: NewsRepository
    ) { }
}