import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as posts from '../actions/posts';
import { Post } from '../models/post';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PostsEffectsService {
  @Effect()
  loadPosts$: Observable<Action> = this.actions$
    .ofType(posts.ActionTypes.LOAD)
    .switchMap((action: posts.LoadAction) => this.postsService.loadPosts(action.payload))
    .map((payload: Post[]) => new posts.LoadSuccessAction(payload))
    .catch(() => of(new posts.LoadFailAction('Failed to load posts')));

  @Effect({ dispatch: false })
  loadFail$: Observable<Action> = this.actions$
    .ofType(posts.ActionTypes.LOAD_FAIL)
    .do((action: posts.LoadFailAction) => console.error(action.payload));

  constructor(private actions$: Actions,
              private postsService: PostsService) {}
}
