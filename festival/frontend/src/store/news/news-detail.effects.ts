// import { Injectable } from '@angular/core';
//
// import { Action, Store } from '@ngrx/store';
// import { Actions, Effect } from '@ngrx/effects';
//
// import { Observable } from 'rxjs';
//
// import { getNewsDetailAction, getNewsDetailSuccessAction, getNewsDetailFailureAction, NEWS_DETAIL_ACTION_TYPES } from './news-detail.actions';
//
// // import { NewsDetailRepository } from './news-detail.repository';
//
// @Injectable()
// export class NewsDetailEffect {
//
//   // @Effect() public getNewsDetailById$: Observable<Action> = this.actions$
//   //   .ofType(NEWS_DETAIL_ACTION_TYPES.GET)
//   //   .switchMap(() => this.newsDetailRepository.getNewsItemById()
//   //     .map(results => getNewsDetailSuccessAction(results))
//   //     .catch(() => Observable.of(getNewsDetailFailureAction())));
//
//   constructor(
//     private actions$: Actions,
//     // private newsDetailRepository: NewsDetailRepository
//   ) { }
// }
