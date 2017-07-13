import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getEventsAction } from '../../../store/events/';
import { ChangeEvent, VirtualScrollComponent } from 'angular2-virtual-scroll';
@Component({
    selector: 'sf-events-feed',
    templateUrl: 'events-feed.component.html'
})

export class EventsFeedComponent implements OnInit {

    public items: Events[];

    constructor(private store: Store<sf.store.EventsStore>) { }

    ngOnInit() {
        this.store.select(s => s.EventsReducer).subscribe(n => this.items = n.entity);
        this.store.dispatch(getEventsAction());
        console.log(this.items);
    }
}