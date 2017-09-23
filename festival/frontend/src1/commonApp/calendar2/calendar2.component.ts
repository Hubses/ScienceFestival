import { Component, OnInit, Input, Output } from '@angular/core';
import { Calendar2Service } from './calendar2.component.service';
import * as moment from 'moment';

@Component({
    selector: 'sf-common-calendar2',
    templateUrl: 'calendar2.component.html',
    styleUrls: ['./calendar2.component.less']
})

export class Calendar2Component implements OnInit {

    @Input() public calendarEvents?: sf.common.Calendar2Event[];
    @Input() public calendarOption?: sf.common.Calendar2Options;
    public currentMonth;
    public currentYear: number;
    constructor(private calendar2Service: Calendar2Service) { }

    ngOnInit() {
        this.currentMonth = moment().month();
        this.currentYear = moment().year();
        console.log(this.calendar2Service.getDaysInMonts(this.currentYear, this.currentMonth));
        console.log(this.calendar2Service.getStartDate(this.currentYear, this.currentMonth));
    }
}