import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'sf-common-tabs',
    templateUrl: './tabs.component.html',
})
export class TabGroupComponent implements OnInit, AfterViewInit {

    @Input() public tabs: sf.common.Tab[];

    constructor(private _sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        console.log(this.tabs);
    }

    ngAfterViewInit(): void {
    }

    public trackById(index: number, tab: sf.common.Tab): number {
        return tab.id;
    }
}
