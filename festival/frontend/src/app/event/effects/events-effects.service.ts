import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";

import { EventsService } from "../services/events.service";
import { Event } from "@sf/event";
import * as collection from "../actions/event-collection";
import * as event from "../actions/event";

@Injectable()
export class EventsEffectsService {
  @Effect()
  loadPosts$: Observable<Action> = this.actions$
    .ofType(collection.ActionTypes.LOAD)
    .switchMap((action: collection.LoadCollectionAction) =>
      this.eventsService.loadEvents(action.payload)
    )
    .map(
      (payload: Event[]) => new collection.LoadCollectionSuccessAction(payload)
    )
    .catch(() =>
      of(new collection.LoadCollectionFailAction("Failed to load todos"))
    );

  @Effect({ dispatch: false })
  loadFail$: Observable<Action> = this.actions$
    .ofType(collection.ActionTypes.LOAD_FAIL)
    .do((action: collection.LoadCollectionFailAction) =>
      console.error(action.payload)
    );

  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}
}
