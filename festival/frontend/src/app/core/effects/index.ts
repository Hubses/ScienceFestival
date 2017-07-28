// import { Effect, Actions, toPayload } from '@ngrx/effects';
// import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs';

// import { LocalizationService } from '../repository/localization.repository';
// import * as localization from '../actions/localization.actions';
// import * as localizationCollection from '../actions/localization.collection';
// export class ApplicationEffects {
//     @Effect()
//     getLocalizationCollection$: Observable<Action> = this.actions$
//         .ofType(localizationCollection.GET)
//         .map(toPayload)
//         .switchMap(() => this.localizationService.getLocalizationList()
//             .map(results => (new localizationCollection.GetLocalizationCollectionSuccessAction(results)))
//             .catch(() => Observable.of(new localizationCollection.GetLocalizationCollectionFailureAction('Error with loading localization collection'))));

//     @Effect({ dispatch: false })
//     getLocalizationCollectionError$: Observable<Action> = this.actions$
//         .ofType(localizationCollection.GET_FAILURE)
//         .do((action: localizationCollection.GetLocalizationCollectionFailureAction) => console.error(action.payload));

//     @Effect()
//     getCurrentLocalization$: Observable<Action> = this.actions$
//         .ofType(localization.GET)
//         .map(toPayload)
//         .switchMap(() => this.localizationService.getCurrentLocalization()
//             .map(results => (new localization.GetLocalizationSuccessAction(results)))
//             .catch(() => Observable.of(new localization.GetLocalizationFailureAction('Error with loading current localization'))));

//     @Effect({ dispatch: false })
//     getCueentLocalizationError$: Observable<Action> = this.actions$
//         .ofType(localization.GET_FAILURE)
//         .do((action: localization.GetLocalizationFailureAction) => console.error(action.payload));

//     @Effect()
//     changeCurrentLocaliation$: Observable<Action> = this.actions$
//         .ofType(localization.CHANGE)
//         .map(toPayload)
//         .switchMap((payload) => this.localizationService.changeLocalization(payload)
//             .map(results => (new localization.ChangeLocalizationSuccessAction(results)))
//             .catch(() => Observable.of(new localization.ChangeLocalizationFailureAction('Error with changing current localization'))));

//     @Effect({ dispatch: false })
//     changeCurrentLocalizationError$: Observable<Action> = this.actions$
//         .ofType(localization.CHANGE_FAILURE)
//         .do((action: localization.ChangeLocalizationFailureAction) => console.error(action.payload));


//     constructor(
//         private actions$: Actions,
//         private localizationService: LocalizationService
//     ) { }
// }