import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user';
import * as root from '../shared/reducers';


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
  }

  ngOnInit() {
  }
}
