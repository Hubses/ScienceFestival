import { routerReducer } from '@ngrx/router-store';
import * as fromNews from './news.reducer';
import * as fromNewsCollection from './news.collection.reducer';

export const reducers = {
    news: fromNews.newsReducer,
    newsCollection: fromNewsCollection.newsCollectionReducer,
};
