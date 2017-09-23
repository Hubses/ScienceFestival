
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.less']
})

export class IconComponent {
    @Input() public type: string;
    @Output() public onIconTypeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public iconTypeChange(isChange: boolean): void {
        this.onIconTypeChange.emit(isChange);
    }
}
