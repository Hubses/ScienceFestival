import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFestivalEventAction } from '../../../store/festivalEvent';

@Component({
    selector: 'sf-festivalEvent-feed',
    templateUrl: 'festivalEvent-feed.component.html',
    styleUrls: ['./festivalEvent-feed.component.less']
})

export class FestivalEventFeedComponent implements OnInit {

    public events: FestivalEvent[];

    constructor(private store: Store<sf.store.FestivalEventStore>) { }

    ngOnInit() {
        this.store.select(store => store.festivalEventReducer).subscribe(festivalEvents => this.events = festivalEvents.entity);
        this.store.dispatch(getFestivalEventAction());
        console.log(this.events);
    }
}
