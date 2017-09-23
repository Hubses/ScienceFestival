import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import * as root from '../reducers';
import * as todos from '../actions/todos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  constructor(private store: Store<root.ExtendedState>,
              private activatedRoute: ActivatedRoute) {
    this.store.replaceReducer(root.extendedReducer);
    this.loaded$ = this.store.select(root.getLoaded);
    this.loading$ = this.store.select(root.getLoading);
    this.todos$ = this.store.select(root.getTodos);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => {
          const userId = +params['userId'];
          this.store.dispatch(new todos.LoadAction(userId));
        }
      );
  }

}
