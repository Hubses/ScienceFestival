import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { Event } from "@sf/event";

let events: Event[] = [
  {
    id: 1,
    name: "some",
    description: "some description"
  },
  {
    id: 2,
    name: "some2",
    description: "some description2"
  }
];

@Injectable()
export class EventsService {
  constructor(private http: Http) {}

  loadEvents(userId: number): Observable<Event[]> {
    return Observable.of(events);
    // return this.http
    //   .get(`${environment.baseApiUrl}/todos?userId=${userId}`)
    //   .map(res => res.json());
  }
}
