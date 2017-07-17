import { Action } from '@ngrx/store';
import { NEWS_DETAIL_ACTION_TYPES } from './news-detail.actions';

type State = sf.store.LoadableObject<sf.entities.News>;

const initialState: State = {
  isLoaded: false,
  isLoading: false,
  isError: false,
  entity: null
};

const newsDetailReducer = (state: State = initialState, { type, payload }: Action): State => {
  switch (type) {
    case NEWS_DETAIL_ACTION_TYPES.GET:
      return Object.assign({}, state, {
        isLoading: true,
        isError: false
      });

    case NEWS_DETAIL_ACTION_TYPES.GET_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: true,
        isLoading: false,
        isError: false,
        entity: payload
      });

    case NEWS_DETAIL_ACTION_TYPES.GET_FAILURE:
      return Object.assign({}, state, {
        isLoaded: false,
        isLoading: false,
        isError: true,
      });

    default:
      return state;
  }
};
export default newsDetailReducer;
