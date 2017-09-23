import * as ui from '../actions/ui-state';

export interface State {
  showSidebar: boolean;
}

const initialState: State   = {
  showSidebar: true
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.OPEN_SIDEBAR:
      return {
        showSidebar: true
      };
    case ui.ActionTypes.CLOSE_SIDEBAR:
      return {
        showSidebar: false
      };
    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
