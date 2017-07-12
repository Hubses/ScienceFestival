import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs';

import { getEventsAction, getEventsFailureAction, getEventsSuccessAction, EVENTS_ACTION_TYPES } from './events.actions';

import { EventsRepository } from './events.repository';

@Injectable()
export class EventsEffect {

    @Effect() public getEvents$: Observable<Action> = this.actions$
        .ofType(EVENTS_ACTION_TYPES.GET)
        .switchMap(() => this.eventsRepository.getEvents()
            .map(results => getEventsSuccessAction(results))
            .catch(() => Observable.of(getEventsFailureAction())));

    constructor(
        private actions$: Actions,
        private eventsRepository: EventsRepository
    ) { }
}