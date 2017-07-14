import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs';

import { getFestivalEventAction, getFestivalEventFailureAction, getFestivalEventSuccessAction, FESTIVALEVENT_ACTION_TYPES } from './festivalEvent.actions';

import { FestivalEventRepository } from './festivalEvent.repository';

@Injectable()
export class FestivalEventEffect {

    @Effect() public getFestivalEvent$: Observable<Action> = this.actions$
        .ofType(FESTIVALEVENT_ACTION_TYPES.GET)
        .switchMap(() => this.FestivalEventRepository.getFestivalEvent()
            .map(results => getFestivalEventSuccessAction(results))
            .catch(() => Observable.of(getFestivalEventFailureAction())));

    constructor(
        private actions$: Actions,
        private FestivalEventRepository: FestivalEventRepository
    ) { }
}