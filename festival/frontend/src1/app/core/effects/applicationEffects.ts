import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LocalizationService } from '../repository/localization.repository';
import * as localization from '../actions/localization.actions';
import * as localizationCollection from '../actions/localization.collection';
export class ApplicationEffects {
    @Effect()
    getLocalizationCollection$: Observable<Action> = this.actions$
        .ofType(localizationCollection.GET)
        .map(toPayload)
        .switchMap(() => this.localizationService.getLocalizationList()
            .map(results => (new localizationCollection.GetLocalizationCollectionSuccessAction(results)))
            .catch(() => Observable.of(new localizationCollection.GetLocalizationCollectionFailureAction())));


    constructor(
        public actions$: Actions,
        public localizationService: LocalizationService
    ) { }
}