import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const NEWS: News[] = [{ //mock data
    header: 'some header',
    description: 'some description',
    logo: 'logo'
}]

@Injectable()
export class NewsRepository {

    constructor() { }

    getNews(): Observable<News[]> {
        return Observable.of(NEWS);
    }
}