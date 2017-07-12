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

    public events: sf.common.Events[] = [
        {
            id: 1,
            title: 'All Day Event',
            start: '2017-07-01',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Long Event',
            start: '2017-07-07',
            end: '2017-07-10',
            url: null
        }
    ];

    public coordinates: sf.common.Coordinates[] = [{
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