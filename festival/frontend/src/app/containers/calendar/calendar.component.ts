import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sf-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['./calendar.component.less']
})

export class CalendarComponent implements OnInit {

  public events: sf.common.Event;

  constructor() {
  }

  ngOnInit() {
  }

  setEvent(events: any){
    
  }
}
