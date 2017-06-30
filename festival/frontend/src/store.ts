import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { newsReducer, NewsEffect } from './store/news';

const ApplicationReducers = {
    newsReducer
}

export const ApplicationStoreModule = StoreModule.provideStore(combineReducers(ApplicationReducers));

export const ApplicationEffects = [
    EffectsModule.run(NewsEffect)
];
