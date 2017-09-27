import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as root from '../../reducers';
import { User } from '@sf/auth';
import * as auth from "../../actions/auth";

@Component({
	selector: 'register',
	templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit, OnDestroy {
	getLoggedIn$: Observable<boolean>;
	getLoginPageState$: Observable<any>;
	getUser$: Observable<User>;
	getLoggedInSubscription: Subscription;
	getLoginPageStateSubscription: Subscription;
	getUserSubscription: Subscription;
	loggedIn: boolean;
	loginPageState: any;
	user: User;
	constructor(private store: Store<root.AuthState>) {
		this.store.replaceReducer(root.extendedReducer);
		this.getLoggedIn$ = this.store.select(s => s.auth.loggedIn);
		this.getLoginPageState$ = this.store.select(root.getLoginPageState);
		this.getUser$ = this.store.select(root.getUser);
	}
	ngOnInit() {
		this.getLoggedInSubscription = this.getLoggedIn$.subscribe((val) => console.log(val));
		this.getLoginPageStateSubscription = this.getLoginPageState$.subscribe((val) => console.log(val));
		this.getUserSubscription = this.getUser$.subscribe((val) => console.log(val));
	}
	ngOnDestroy(): void {
		this.getLoggedInSubscription.unsubscribe();
		this.getLoginPageStateSubscription.unsubscribe();
		this.getUserSubscription.unsubscribe();
	}
	register(): void {
		this.store.dispatch(new auth.RegisterAction({ username: 'user1', password: '123' }));
	}
}