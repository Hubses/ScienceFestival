import { Component, Input } from '@angular/core';

@Component({
    selector: 'sf-common-card',
    templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() public cardTitle: string;
  @Input() public cardSubtitle: string;
  @Input() public cardContent: string;
}
