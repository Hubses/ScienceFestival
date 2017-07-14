import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export const FESTIVALEVENT: FestivalEvent[] = [{ //mock data
  header: 'Some header',
  description: 'some description'
  },
  {
    header: 'Routing Angular',
    description: `The Angular Router ("the router") borrows from this model. It can interpret a browser URL as an instruction to navigate to a client-generated view. It can pass optional parameters along to the supporting view component that help it decide what specific content to present. You can bind the router to links on a page and it will navigate to the appropriate application view when the user clicks a link. You can navigate imperatively when the user clicks a button, selects from a drop box, or in response to some other stimulus from any source. And the router logs activity in the browser's history journal so the back and forward buttons work as well.`
  }];

@Injectable()
export class FestivalEventRepository {

  constructor() {
  }

  getFestivalEvent(): Observable<FestivalEvent[]> {
    return Observable.of(FESTIVALEVENT);
  }
}
