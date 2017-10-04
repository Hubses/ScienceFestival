import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import * as root from "../../reducers";
import { User } from "@sf/auth";
import * as auth from "../../actions/auth";

@Component({
  selector: "home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  getUserRoles$: Observable<any>;
  getUserRolesSubscription: Subscription;
  constructor(private store: Store<root.AuthState>) {
    this.store.replaceReducer(root.extendedReducer);
    this.getUserRoles$ = this.store.select(root.getUserRoles).skip(1);
  }
  ngOnInit() {
    console.group("user roles");
    this.getUserRolesSubscription = this.getUserRoles$.subscribe(val => {
      console.log(val);
    })
    console.groupEnd();
  }
  ngOnDestroy(): void {
    this.getUserRolesSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.store.dispatch(new auth.LoadRolesAction());
  }
}
