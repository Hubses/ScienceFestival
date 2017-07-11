import { Component, Input } from '@angular/core';

@Component({
    selector: 'sf-common-icon',
    templateUrl: './icon.component.html'
})
export class IconComponent {
    @Input() public name: string;
}
