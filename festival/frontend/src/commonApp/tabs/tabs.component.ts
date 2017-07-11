import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Pipe } from '@angular/core';


@Component({
    selector: 'sf-common-tabs',
    templateUrl: './tabs.component.html',
})
export class TabGroupComponent implements OnInit, AfterViewInit {


    @Input() public tabs: sf.common.Tab[];
    @ViewChild('tabContent') public tabContentRef: ElementRef;

    constructor() { }

    ngOnInit(): void {
        console.log(this.tabs);
    }
    ngAfterViewInit(): void {
        // this.tabContentRef.nativeElement.innerHTML = this.tabs[0].content;
    }

    public trackById(index: number, tab: sf.common.Tab): number {
        return tab.id;
    }
}
