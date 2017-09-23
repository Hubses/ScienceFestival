import * as fromLayout from './layout.reducer';
import * as fromLocalization from './localization.reducer';
import * as fromLocalizationCollection from './localization.collection.reducer';

export interface CoreStates extends fromLayout.State, fromLocalization.State, fromLocalizationCollection.State { };

export const reducers = {
    layout: fromLayout.layout,
    localization: fromLocalization.localization,
    localizationList: fromLocalizationCollection.localizationCollection
};
