import { Component, Input } from '@angular/core';

@Component({
    selector: 'sf-common-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less']
})
export class MapComponent {
  @Input() public coordinates: sf.common.Coordinates[];

  public zoom: number = 15;

}