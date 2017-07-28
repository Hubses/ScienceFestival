import * as news from '../actions/news.actions';

export interface State {
    loaded: boolean;
    loading: boolean;
    news: sf.entities.News;
};

const initialState: State = {
    loaded: false,
    loading: false,
    news: null
};

export function newsReducer(state = initialState, action: news.Actions): State {
    switch (action.type) {
        case news.GET:
            return Object.assign({}, state, {
                loaded: true
            });

        default:
            return state;
    }
}