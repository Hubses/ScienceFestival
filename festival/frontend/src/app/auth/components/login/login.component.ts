import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import * as root from "../../reducers";
import { User } from "@sf/auth";
import * as auth from "../../actions/auth";

@Component({
  selector: "login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit, OnDestroy {
  getLoggedIn$: Observable<boolean>;
  getLoginPageState$: Observable<any>;
  getUser$: Observable<User>;
  getLoggedInSubscription: Subscription;
  getLoginPageStateSubscription: Subscription;
  getUserSubscription: Subscription;
  loggedIn: boolean;
  loginPageState: any;
  user: User;
  UserRoles;
  constructor(private store: Store<root.AuthState>) {
    this.store.replaceReducer(root.extendedReducer);
    this.getLoggedIn$ = this.store.select(s => s.auth.loggedIn);
    this.getLoginPageState$ = this.store.select(root.getLoginPageState);
    this.getUser$ = this.store.select(root.getUser);
  }
  ngOnInit() {
    this.getLoggedInSubscription = this.getLoggedIn$.subscribe(val =>
      console.log(val)
    );
    this.getLoginPageStateSubscription = this.getLoginPageState$.subscribe(
      val => console.log(val)
    );
    this.getUserSubscription = this.getUser$.subscribe(val => console.log(val));
  }
  ngOnDestroy(): void {
    this.getLoggedInSubscription.unsubscribe();
    this.getLoginPageStateSubscription.unsubscribe();
    this.getUserSubscription.unsubscribe();
  }

  login(): void {
    this.store.dispatch(
      new auth.LoginAction({ username: "test", password: "123" })
    );
  }
 
  // tslint:disable-next-line:eofline
}
