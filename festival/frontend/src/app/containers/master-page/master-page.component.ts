import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import * as fromRoot from '../../../store';
import * as layout from '../../../store/layout/layout.actions';
import * as app from '../../../store/application/application.actions';
import { getUserAction } from '../../../store/user';

@Component({
    selector: 'sf-master-page',
    templateUrl: 'master-page.component.html',
    styleUrls: ['./master-page.component.less'],
    encapsulation: ViewEncapsulation.None

})

export class MasterPageComponent implements OnInit, OnDestroy {
    // streams
    public navigationShow$: Observable<boolean>;
    public navigationCollapse$: Observable<boolean>;
    public localizationList$: Observable<sf.entities.Localization>;
    public currentLocalization$: Observable<sf.entities.Localization>;

    public user$: Observable<sf.entities.User>;
    // subscriptions
    private navigationShowSubscriber: Subscription;
    private navigationCollapseSubscriber: Subscription;
    private localizationListSubscription: Subscription;
    private currentLocalizationSubscription: Subscription;
    private userSubscription: Subscription;

    // variables
    private localizationList: sf.entities.Localization;
    private currentLocalization: sf.entities.Localization;
    public isNavigationShow: boolean;

    public isNavigationCollapsed: boolean;
    constructor(
        private store: Store<fromRoot.ApplicationState>
    ) {
        // this.navigationShow$ = this.store.select(s => s.layout.showSidenav);
        // this.navigationCollapse$ = this.store.select(s => s.layout.collapseSidenav);
        // this.localizationList$ = this.store.select(s => s.application.localizationList);
        // this.currentLocalization$ = this.store.select(s => s.application.currentLocalization);
        // this.user$ = this.store.select(s => s.userReducer);
    }

    ngOnInit() {
        // this.store.dispatch(new app.GetLocalizationListAction());
        // this.store.dispatch(getUserAction('example@example.com'));
        // this.userSubscription = this.user$.subscribe((user) => { });

        // this.navigationShowSubscriber = this.navigationShow$.subscribe((isShowNavigation) => {
        //     this.isNavigationShow = isShowNavigation;
        // });
        // this.navigationCollapseSubscriber = this.navigationCollapse$.subscribe((isNavigationCollapse) => {
        //     this.isNavigationCollapsed = isNavigationCollapse;
        // });
        // this.localizationListSubscription = this.localizationList$.subscribe((localizationList) => {
        //     this.localizationList = localizationList;
        // });
        // this.currentLocalizationSubscription = this.currentLocalization$.subscribe((currentLocalization) => {
        //     this.currentLocalization = currentLocalization;
        // });

    }
    ngOnDestroy(): void {
        this.navigationShowSubscriber.unsubscribe();
        this.navigationCollapseSubscriber.unsubscribe();
        this.localizationListSubscription.unsubscribe();
        this.currentLocalizationSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }
    public toggleSidenav(): void {
        if (!this.isNavigationShow) {
            this.store.dispatch(new layout.OpenSidenavAction());
        } else {
            this.store.dispatch(new layout.CloseSidenavAction());
        }
    }

    sidenavToggled(): void {
        if (!this.isNavigationCollapsed) {
            this.store.dispatch(new layout.CollapseSidenavAction());
        } else {
            this.store.dispatch(new layout.WideSidenavAction());
        }
    }
    getLocalization(lang: sf.entities.Localization) {
        this.store.dispatch(new app.ChangeLocalizationAction(lang));
    }
}
