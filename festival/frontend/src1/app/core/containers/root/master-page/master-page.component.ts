import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import * as layout from "../../../actions/layout.actions";
// import * as fromLayout from "../../../reducers/layout.reducer";
import * as localization from '../../../actions/localization.actions';
import * as localizationCollection from '../../../actions/localization.collection';
import * as fromApplication from '../../../reducers'
// import * as fromRoot from '../../../store';
// import * as layout from '../../../store/layout/layout.actions';
// import * as app from '../../../store/application/application.actions';
// import { getUserAction } from '../../../store/user';

@Component({
    selector: 'sf-master-page',
    templateUrl: 'master-page.component.html',
    styleUrls: ['./master-page.component.less'],
    encapsulation: ViewEncapsulation.None

})

export class MasterPageComponent implements OnInit, OnDestroy {

    constructor(
        private store: Store<fromApplication.CoreStates>
    ) {

    }

    ngOnInit() {
        // this.store.select(s => s.entity).subscribe((entity) => console.log(entity));
        // this.store.dispatch(new localizationCollection.GetLocalizationCollectionAction());
    }
    ngOnDestroy(): void {

    }
    clickMe() {
        this.store.dispatch(new layout.OpenSidenavAction());
    }
    public toggleSidenav(): void {

    }

    sidenavToggled(): void {

    }
    getLocalization(lang: sf.entities.Localization) {

    }
    changeLocalization(localization: sf.entities.Localization) {
        console.log(localization);
    }
}
