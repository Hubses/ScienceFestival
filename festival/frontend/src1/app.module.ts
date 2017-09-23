import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 3rd party libs
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { CKEditorModule } from 'ng2-ckeditor';
// common module
import { SFCommonModule } from './commonApp/common.module';
// store
import { StoreModule } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterStoreModule } from "@ngrx/router-store";

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NewsRepository } from './store/news';
import { UserRepository, UserEffect } from './store/user';

import { newsEffects } from "./app/news/effects";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

// import { newsEffects } from './app/news/effects/news.effects';
// import { newsCollectionEffects } from "./app/news/effects/news.collection.effects";

import { ApplicationReducers } from './store';

import newsReducer from './store/news/news.reducer';
import userReducer from './store/user/user.reducer';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from "./app/core/core.module";

import { APP_API } from './constants';
// containers
import {
  AppComponent,
  CommonComponent,
  // MasterPageComponent,
  FullFeedComponent,
  // NewsFeedComponent,
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
  HeaderComponent,
  NewsDetailComponent,
  NewsEditorComponent,
  NewsCreaterComponent
} from './app/components';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";


@NgModule({
  declarations: [
    // containers
    AppComponent,
    // CommonComponent,
    // MasterPageComponent,
    // FullFeedComponent,
    // NewsFeedComponent,
    // EventsFeedComponent,
    // CalendarComponent,
    // PersonalComponent,
    // AdminDashboardComponent,
    // WorksFeedComponent,
    // AdminStatisticComponent,
    // ApproveComponent,
    // // components
    // NotFoundComponent,
    // LoginComponent,
    // NewsDetailComponent,
    // NewsItemComponent,
    // RegisterComponent,
    // AboutComponent,
    // NavigationPanelComponent,
    // HeaderComponent,
    // NewsCreaterComponent,
    // NewsEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [Http]
    //   }
    // }),
    CKEditorModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(combineReducers(ApplicationReducers)),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    SFCommonModule.forRoot()
  ],
  providers: [
    // NewsRepository,
    // UserRepository
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
