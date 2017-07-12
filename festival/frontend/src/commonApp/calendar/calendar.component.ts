import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
    @Input() events: sf.common.Events[];

    public options = {
        editable: false,
        eventLimit: true,
        events: []
    }

    ngOnInit(): void {
        this.options.events = this.events;
    }
}
