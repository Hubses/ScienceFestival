
import { Component, Input } from '@angular/core';

@Component({
    selector: 'sf-common-icon',
    templateUrl: './icon.component.html',
    styleUrls:['./icon.component.less']
})

export class IconComponent {
    @Input() public type: string;
}
