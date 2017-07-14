import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import newsReducer from './store/news/news.reducer';
import { NewsEffect } from './store/news';
import FestivalEventReducer from './store/festivalEvent/festivalEvent.reducer';
import { FestivalEventEffect } from './store/festivalEvent';

const ApplicationReducers = {
    newsReducer,
    FestivalEventReducer
};

export const ApplicationStoreModule = StoreModule.provideStore(combineReducers(ApplicationReducers));

export const ApplicationEffects = [
     EffectsModule.run(NewsEffect),
    EffectsModule.run(FestivalEventEffect)];
