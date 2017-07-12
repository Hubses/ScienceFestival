import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sf-common-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
    @Input() events: sf.common.Events[];

    public options = {
        header: {
            left: 'title',
            center: 'month,agendaWeek,agendaDay',
            right: 'prev,next today'
        },
        editable: false,
        eventLimit: true,
        events: []
    }

    ngOnInit(): void {
        this.options.events = this.events;
    }
}
