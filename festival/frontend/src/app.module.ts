import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 3rd party libs
import { VirtualScrollModule } from 'angular2-virtual-scroll';
// common module
import { SFCommonModule } from './commonApp/common.module';
// store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NewsRepository } from './store/news';
import { ApplicationStoreModule, ApplicationEffects } from './store';
import newsReducer from './store/news/news.reducer';
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
import { SFCommonModule } from './commonApp/common.module';
import {
  NotFoundComponent,
  NewsComponent,
  LoginComponent,
  RegisterComponent,
  AboutComponent
} from './app/components';
// routes
import { NewsRepository } from './store/news';
import newsReducer from './store/news/news.reducer';

import { EventsRepository } from './store/events';
import eventsReducer from './store/events/events.reducer';
import { ApplicationStoreModule, ApplicationEffects } from './store';

import { SFCommonModule } from './commonApp/common.module';const appRoutes: Routes = [
  { path: 'common', component: CommonComponent },
  {
    path: 'feed', component: MasterPageComponent,
    children: [
      { path: '', component: FullFeedComponent },
      { path: 'news', component: NewsFeedComponent },
      { path: 'events', component: EventsFeedComponent },
      { path: 'works', component: WorksFeedComponent },
    ]
  },
  {
    path: 'calendar', component: MasterPageComponent,
    children: [
      { path: '', component: CalendarComponent }
    ]
  },
  {
    path: 'personal', component: MasterPageComponent, // can activate?
    children: [
      { path: '', component: PersonalComponent }
    ]
  },
  {
    path: 'login', component: MasterPageComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'register', component: MasterPageComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
  },
  {
    path: 'dashboard', component: MasterPageComponent,
    children: [
      { path: '', component: AdminDashboardComponent }
    ]
  },
  {
    path: 'statistic', component: MasterPageComponent,
    children: [
      { path: '', component: AdminStatisticComponent }
    ]
  },
  {
    path: 'approve', component: MasterPageComponent,
    children: [
      { path: '', component: ApproveComponent }
    ]
  },
  {
    path: 'about', component: MasterPageComponent,
    children: [
      { path: '', component: AboutComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
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
    NewsComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...ApplicationEffects,
    StoreModule.provideStore({ newsReducer }),
    StoreModule.provideStore({ eventsReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SFCommonModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }), // router debug
    VirtualScrollModule
  ],
  providers: [NewsRepository, EventsRepository],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
