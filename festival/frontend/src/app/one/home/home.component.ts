import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../reducers';
import * as posts from '../actions/posts';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  posts$: Observable<Post[]>;

  constructor(private store: Store<root.ExtendedState>,
              private activatedRoute: ActivatedRoute) {
    this.store.replaceReducer(root.extendedReducer);
    this.loaded$ = this.store.select(root.getLoaded);
    this.loading$ = this.store.select(root.getLoading);
    this.posts$ = this.store.select(root.getPosts);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        const userId = +params['userId'];
        this.store.dispatch(new posts.LoadAction(userId));
      }
    );
  }
}
