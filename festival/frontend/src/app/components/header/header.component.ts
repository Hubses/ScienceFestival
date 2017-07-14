import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
    @Input() public isToggledButton: boolean;
    @Output() public onTogledButton: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public localization: sf.common.DropdownOptions<string>;
    @Output() public onLocalizationChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }
    public toggle(isToggled: boolean): void {
        this.onTogledButton.emit(isToggled);
    }
    public localizationChange(option: string): void {
        this.onLocalizationChange.emit(option);
    }
}