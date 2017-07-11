import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-common',
    templateUrl: 'common.component.html'
})

export class CommonComponent implements OnInit {

    public dropdownOptions = {
        placeholder: 'qwe',
        values: ['123', '456']
    }

    public events = [
        {
            title: 'All Day Event',
            start: '2017-07-01'
        },
        {
            title: 'Long Event',
            start: '2017-07-07',
            end: '2017-07-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2017-07-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2017-07-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2017-07-11',
            end: '2017-07-13'
        },
        {
            title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2016-09-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2016-09-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2016-09-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2016-09-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-09-28'
        }
    ];

    public coordinates: any[] = [{
        latitude: 53.903215,
        longitude: 30.335182,
        description: 'this coordinates dont have information'
    }, {
        latitude: 53.908882,
        longitude: 30.346130,
        description: 'this coordinates dont have information'
    }];


    public tabs: sf.common.Tab[] = [
        {
            id: 1,
            title: '123',
            content: `tempsras`
        }
    ];

    constructor() { }

    ngOnInit() { }
}