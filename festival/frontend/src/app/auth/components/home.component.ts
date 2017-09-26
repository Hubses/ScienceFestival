import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../reducers';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { User } from "@sf/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLoggedIn$: Observable<boolean>;
  getLoginPageState$: Observable<any>;
  getUser$: Observable<User>;

  constructor(private store: Store<root.AuthState>,
    private activatedRoute: ActivatedRoute) {
    this.store.replaceReducer(root.extendedReducer);
    this.getLoggedIn$ = this.store.select(root.getLoggedIn);
    this.getLoginPageState$ = this.store.select(root.getLoginPageState);
    this.getUser$ = this.store.select(root.getUser);
  }

  ngOnInit() {
  }
}
