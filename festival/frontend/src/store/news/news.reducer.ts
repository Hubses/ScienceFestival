import { Action } from '@ngrx/store';
import { NEWS_ACTION_TYPES } from './news.actions';

type State = sf.store.LoadableObject<News>;

const initialState: State = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null
};

export const newsReducer = (state: State = initialState, { type, payload }: Action): State => {
    switch (type) {
        case NEWS_ACTION_TYPES.GET:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            });

        case NEWS_ACTION_TYPES.GET_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                isError: false,
                entity: payload
            });

        case NEWS_ACTION_TYPES.GET_FAILURE:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false,
                isError: true,
            });

        default:
            return state;
    }
}