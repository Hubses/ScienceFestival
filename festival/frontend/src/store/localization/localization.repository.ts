import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const Localization: sf.entities.Localization = { //mock data
    'en-Us': 'English',
    'ru': 'Russian',
};

@Injectable()
export class LocalizationRepository {

    constructor() {
    }

    getLocalization(): Observable<sf.entities.Localization> {
        return Observable.of(Localization);
    }
}
