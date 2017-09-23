import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class Calendar2Service {

    constructor() { }
    public getDaysInMonts(year: number, month: number): number {
        return moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
    }
    public getStartDate(year: number, month: number) {
        var startDate = moment([year, month]);

        return startDate;
    }
}
