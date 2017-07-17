import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 3rd party libs
import { VirtualScrollModule } from 'angular2-virtual-scroll';
// common module
import { SFCommonModule } from './commonApp/common.module';
// store
import { StoreModule } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { NewsRepository, NewsEffect } from './store/news';
import { UserRepository, UserEffect } from './store/user';

import { ApplicationReducers } from './store';

import newsReducer from './store/news/news.reducer';
import userReducer from './store/user/user.reducer';
import { appRoutes } from './routes';

import { APP_API } from './constants';
// containers
import {
  AppComponent,
  CommonComponent,
  MasterPageComponent,
  FullFeedComponent,
  NewsFeedComponent,
  EventsFeedComponent,
  CalendarComponent,
  PersonalComponent,
  AdminDashboardComponent,
  WorksFeedComponent,
  AdminStatisticComponent,
  ApproveComponent
} from './app/containers';
// components
import {
  NotFoundComponent,
  LoginComponent,
  RegisterComponent,
  NewsItemComponent,
  AboutComponent,
  NavigationPanelComponent,
  HeaderComponent
} from './app/components';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from "@ngrx/effects";
// routes

const ApplicationEffects = [
  EffectsModule.run(NewsEffect)
];
@NgModule({
  declarations: [
    // containers
    AppComponent,
    CommonComponent,
    MasterPageComponent,
    FullFeedComponent,
    NewsFeedComponent,
    EventsFeedComponent,
    CalendarComponent,
    PersonalComponent,
    AdminDashboardComponent,
    WorksFeedComponent,
    AdminStatisticComponent,
    ApproveComponent,
    // components
    NotFoundComponent,
    LoginComponent,
    NewsItemComponent,
    RegisterComponent,
    AboutComponent,
    NavigationPanelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterStoreModule.connectRouter(),
    ...ApplicationEffects,
    StoreLogMonitorModule,
    StoreModule.provideStore(combineReducers(ApplicationReducers)),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      monitor: useLogMonitor({ visible: true, position: 'right' })
    }),
    SFCommonModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true
      }) // router debug
  ],
  providers: [
    NewsRepository,
    UserRepository
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
