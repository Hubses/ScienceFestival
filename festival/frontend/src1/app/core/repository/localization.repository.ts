import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

export const localizationList: sf.entities.Localization = {
    'en': 'English',
    'ru': 'Russian'
}
export let currentLocalization: sf.entities.Localization = {
    'en': 'English'
}
@Injectable()
export class LocalizationService {

    constructor() { }
    getLocalizationList(): Observable<sf.entities.Localization> {
        return Observable.of(localizationList);
    }
    getCurrentLocalization(): Observable<sf.entities.Localization> {
        return Observable.of(currentLocalization);
    }
    changeLocalization(localization: sf.entities.Localization) {
        currentLocalization = localization;
        return Observable.of(currentLocalization);
    }
}
