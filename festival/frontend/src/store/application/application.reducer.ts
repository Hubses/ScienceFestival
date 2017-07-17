import { Action } from '@ngrx/store';
import * as application from './application.actions';


export interface State {
    localizationList: sf.entities.Localization;
    currentLocalization: sf.entities.Localization;
}

const initialState: State = {
    localizationList: {
        'en': 'English',
        'ru': 'Russian'
    },
    currentLocalization: {
        'en': 'English'
    }
};

export function reducer(state = initialState, action: application.Actions): State {
    switch (action.type) {
        case application.GET_LOCALIZATION_LIST:
            return {
                localizationList: state.localizationList,
                currentLocalization: state.currentLocalization
            }

        case application.CHANGE_LOCALIZATION:
            return {
                localizationList: state.localizationList,
                currentLocalization: action.payload
            };
        default:
            return state;
    }
}

