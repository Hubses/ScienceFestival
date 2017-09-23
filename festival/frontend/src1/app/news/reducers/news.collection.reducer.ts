import * as news from '../actions/news.actions';
import * as newsCollection from '../actions/news.collection.actions';

export interface State {
    loaded: boolean;
    loading: boolean;
    entities: sf.entities.News[];
};

const initialState: State = {
    loaded: false,
    loading: false,
    entities: [],
};

export function newsCollectionReducer(state = initialState, action: newsCollection.Actions): State {
    switch (action.type) {
        case newsCollection.GET:
            return Object.assign({}, state, {
                loading: true
            });
        case newsCollection.GET_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                entities: action.payload
            });

        default:
            return state;
    }
};
