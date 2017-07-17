import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import * as fromRoot from '../../../store';
import * as layout from '../../../store/layout/layout.actions';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
    selector: 'sf-master-page',
    templateUrl: 'master-page.component.html',
    styleUrls: ['./master-page.component.less'],
    encapsulation: ViewEncapsulation.None

})

export class MasterPageComponent implements OnInit {
    showSidenav$: Observable<boolean>;
    public isShowSidenav: boolean;
    public isNavigationCollapsed: boolean;
    @ViewChild('sidenav') public sidenav: MdSidenav;
    public localization: sf.common.DropdownOptions<string>;

    constructor(private store: Store<fromRoot.State>) {
        this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    }

    ngOnInit() {
        // this.router.navigateByUrl('/lang/en-Us/role/anonimus', { skipLocationChange: true });

        this.localization = {
            placeholder: 'select languadge',
            values: ['eng', 'rus'],
            selectedValue: 'eng'
        };
        // this.router.createUrlTree(['/feed', 'news', 'lang', this.localization.selectedValue]);
    }
    public toggleSidenav(): void {

        if (this.isShowSidenav) {
            this.store.dispatch(new layout.OpenSidenavAction());
            this.isShowSidenav = !this.isShowSidenav;
        } else {
            this.store.dispatch(new layout.CloseSidenavAction());
            this.isShowSidenav = !this.isShowSidenav;
        }
    }

    onSidenavToggled(): void {
        this.isNavigationCollapsed = !this.isNavigationCollapsed;
    }
    getLocalization(lang: string) {
    }
}
