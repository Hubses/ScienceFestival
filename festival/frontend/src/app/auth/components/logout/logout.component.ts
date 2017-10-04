import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import * as root from "../../reducers";
import { User } from "@sf/auth";
import * as auth from "../../actions/auth";
@Component({
  selector: "logout",
  templateUrl: "logout.component.html"
})
export class LogoutComponent implements OnInit {
  constructor(private store: Store<root.AuthState>) {
    this.store.replaceReducer(root.extendedReducer);
  }
  ngOnInit() {}
  logout(): void {
    this.store.dispatch(new auth.LogoutAction(true));
  }
}
