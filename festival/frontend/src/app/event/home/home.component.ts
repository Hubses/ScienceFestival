import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as root from "../reducers";
import * as collection from "../actions/event-collection";
import * as event from "../actions/event";

import { ActivatedRoute } from "@angular/router";
import { Event } from "@sf/event";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  events$: Observable<Event[]>;

  constructor(
    private store: Store<root.ExtendedState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.store.replaceReducer(root.extendedReducer);
    this.loaded$ = this.store.select(root.getCollectionLoaded);
    this.loading$ = this.store.select(root.getCollectionLoading);
    this.events$ = this.store.select(root.getCollection);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const userId = +params["userId"];
      this.store.dispatch(new collection.LoadCollectionAction(userId));
    });
  }
}
