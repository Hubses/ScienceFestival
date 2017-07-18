import * as layoutActions from './layout.actions';


export interface State {
    showSidenav: boolean;
    collapseSidenav: boolean
}

const initialState: State = {
    showSidenav: true,
    collapseSidenav: true
};

export function layout(state = initialState, action: layoutActions.SidenavActions): State {
    switch (action.type) {
        case layoutActions.CLOSE_SIDENAV:
            return {
                showSidenav: false,
                collapseSidenav: undefined
            };

        case layoutActions.OPEN_SIDENAV:
            return {
                showSidenav: true,
                collapseSidenav: undefined
            };

        case layoutActions.WIDE_SIDENAV:
            return {
                showSidenav: true,
                collapseSidenav: false
            };
        case layoutActions.COLLAPSE_SIDENAV:
            return {
                showSidenav: true,
                collapseSidenav: true
            };

        default:
            return state;
    }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getCollapseSidenav = (state: State) => state.collapseSidenav;
