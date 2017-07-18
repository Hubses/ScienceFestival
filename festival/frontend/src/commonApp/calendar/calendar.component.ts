import {Component, Input, OnInit, Output, EventEmitter,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sf-common-calendar',
  templateUrl: './calendar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  @Input() public events: sf.common.Event[];
  @Input() public options: sf.common.CalendarOptions;
  @Output() public onEdit: EventEmitter<any> = new EventEmitter();

  public defalteOptions: sf.common.CalendarOptions = {
    contentHeight: 'auto',
    header: {
      left: 'title',
      center: 'month,agendaWeek,agendaDay',
      right: 'prev,next today'
    },
    editable: false,
    eventLimit: true,
    events: []
  };

  ngOnInit(): void {
    if (this.options == null) {
      this.options = this.defalteOptions;
    }

    this.options.events = this.events;
  }
}
