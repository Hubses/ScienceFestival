import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const EVENTS: Events[] = [{ //mock data
    header: 'some header',
    description: 'some description',
    logo: 'logo'
}]

@Injectable()
export class EventsRepository {

    constructor() { }

    getEvents(): Observable<Events[]> {
        return Observable.of(EVENTS);
    }
}