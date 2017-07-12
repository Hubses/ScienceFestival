import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import newsReducer from './store/news/news.reducer';
import { NewsEffect } from './store/news';

const ApplicationReducers = {
    newsReducer
}

export const ApplicationStoreModule = StoreModule.provideStore(combineReducers(ApplicationReducers));

export const ApplicationEffects = [
    EffectsModule.run(NewsEffect)
];
