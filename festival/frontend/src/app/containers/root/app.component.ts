import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getEventsAction } from '../../../store/events/';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor() { }

  public events: Events[];

  title = 'app works!';

  public dropdownSelect: number | string;

  constructor(private store: Store<sf.store.EventsStore>) { }

  ngOnInit(): void {
    this.store.select(s => s.EventsReducer).subscribe(n => this.events = n.entity);
    this.store.dispatch(getEventsAction());
  }
}
