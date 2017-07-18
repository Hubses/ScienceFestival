import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sf-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit, OnChanges {

    @Input() public isToggledButton: boolean;
    @Output() public onTogledButton: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public localizationList: sf.entities.Localization;
    @Input() public currentLocalization: sf.entities.Localization;
    @Output() public onLocalizationChange: EventEmitter<sf.entities.Localization> = new EventEmitter<sf.entities.Localization>();
    public localizationOption: sf.common.DropdownOptions<string>;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['localizationList'] && changes['currentLocalization']) {
            this.localizationOption = {
                placeholder: 'choose languadge',
                values: this.disassembleLocalizationByValues(this.localizationList),
                selectedValue: this.disassembleLocalizationByValues(this.localizationList, 0)
            }
        }
    }

    private disassembleLocalizationByValues(localization: sf.entities.Localization, index?: number) {
        let localizationListValues = [];

        for (var key in this.localizationList) {
            var keys = this.localizationList[key];
            localizationListValues.push(keys);
        }
        if (index) {
            return localizationListValues[index]
        } else {
            return localizationListValues;
        }
    }
    private assembleLocalizationToObject(value: any) {
        let assembleObject: sf.entities.Localization;
        let key = value.substring(0, 2).toLowerCase();
        assembleObject = {
            [key]: value
        };
        return assembleObject;
    }

    public toggle(isToggled: boolean): void {
        this.onTogledButton.emit(isToggled);
    }
    public localizationChange(option: sf.entities.Localization): void {
        this.currentLocalization = option;

        this.onLocalizationChange.emit(this.assembleLocalizationToObject(option));
    }
}