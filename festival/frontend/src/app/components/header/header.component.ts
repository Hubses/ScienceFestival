import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
    @Input() public isToggledButton: boolean;
    @Output() public onTogledButton: EventEmitter<boolean> = new EventEmitter<boolean>();
    public localization: sf.common.DropdownOptions;

    constructor() { }

    ngOnInit() {
        this.localization = {
            placeholder: 'select languadge',
            values: ['English', 'Russian'],
            selectedValue: 'English'
        };
    }
    public toggle(isToggled: boolean): void {
        this.onTogledButton.emit(isToggled);
    }
    public getLocalization(option: string): void {
        console.log(option);
    }
}