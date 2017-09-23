import { Action } from '@ngrx/store';
import { NEWS_ACTION_TYPES } from './news.actions';

type LoadableState = sf.store.LoadableObject<sf.entities.News>;
type SearchableState = sf.store.SearchableObject<sf.entities.News>;
type CreatableState = sf.store.CreatableObject<sf.entities.News>;
type RemovableState = sf.store.RemovableObject<sf.entities.News>;
type EditableState = sf.store.EditableObject<sf.entities.News>;
type NewsStates = LoadableState
    | SearchableState
    | CreatableState
    | RemovableState
    | EditableState;

const initialState: NewsStates = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null,
    isEditable: false,
    isSearching: false,
    isCreatable: false,
    isRemovable: false
};

const newsReducer = (state: NewsStates = initialState, { type, payload }: Action): NewsStates => {
    switch (type) {
        case NEWS_ACTION_TYPES.GET_ALL:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false,
                entity: payload
            });

        case NEWS_ACTION_TYPES.GET_ALL_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                isError: false,
                entity: payload
            });

        case NEWS_ACTION_TYPES.GET_ALL_FAILURE:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false,
                isError: true,
            });

        case NEWS_ACTION_TYPES.GET:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false,
                entity: payload
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
};
export default newsReducer;
