import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import newsReducer from './store/news/news.reducer';
import { NewsEffect } from './store/news';
import { EventsEffect } from './store/events';
import eventsReducer from "./store/events/events.reducer";

const ApplicationReducers = {
    newsReducer,
    eventsReducer
    
}

export const ApplicationStoreModule = StoreModule.provideStore(combineReducers(ApplicationReducers));

export const ApplicationEffects = [
    EffectsModule.run(NewsEffect),
    EffectsModule.run(EventsEffect)

];
