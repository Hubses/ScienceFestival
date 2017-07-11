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


  public coordinates: any[] = [{
    latitude: 53.903215,
    longitude: 30.335182,
    description: 'this coordinates dont have information'
  },{
    latitude: 53.908882,
    longitude: 30.346130,
    description: 'this coordinates dont have information'
  }];


    public tabs: sf.common.Tab[] = [
        {
            id: 1,
            title: '123',
            content: `1234613
            5465132
            546`
        }
    ];

    constructor() { }

    ngOnInit() { }
}