import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user';
import * as root from '../shared/reducers';
import * as users from '../shared/actions/users';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users$: Observable<User[]>;
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(private store: Store<root.State>) {
    this.loaded$ = this.store.select(root.getLoaded);
    this.loading$ = this.store.select(root.getLoading);
    this.users$ = this.store.select(root.getUsers);
  }

  ngOnInit() {
    this.store.dispatch(new users.LoadAction());
  }
}
