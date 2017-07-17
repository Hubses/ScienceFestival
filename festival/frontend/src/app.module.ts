import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// 3rd party libs
import {VirtualScrollModule} from 'angular2-virtual-scroll';
import { CKEditorModule } from 'ng2-ckeditor';
// common module
import {SFCommonModule} from './commonApp/common.module';
// store
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {NewsRepository} from './store/news';
import {ApplicationStoreModule, ApplicationEffects} from './store';
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
// components
import {
  NotFoundComponent,
  LoginComponent,
  RegisterComponent,
  NewsItemComponent,
  AboutComponent,
  SidenavComponent,
  NewsDetailComponent,
  HeaderComponent,
  NewsCreaterComponent,
  NewsEditorComponent
} from './app/components';
// routes
const appRoutes: Routes = [
  {path: 'common', component: CommonComponent},
  {
    path: 'feed', component: MasterPageComponent,
    children: [
      {path: '', component: FullFeedComponent},
      {path: 'news', component: NewsFeedComponent},
      {path: 'news/:id', component: NewsDetailComponent},
      {path: 'edit/news/:id', component: NewsEditorComponent},
      {path: 'create/news', component: NewsCreaterComponent},
      {path: 'events', component: EventsFeedComponent},
      {path: 'works', component: WorksFeedComponent},
    ]
  },
  {
    path: 'calendar', component: MasterPageComponent,
    children: [
      {path: '', component: CalendarComponent}
    ]
  },
  {
    path: 'personal', component: MasterPageComponent, // can activate?
    children: [
      {path: '', component: PersonalComponent}
    ]
  },
  {
    path: 'login', component: MasterPageComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    path: 'register', component: MasterPageComponent,
    children: [
      {path: '', component: RegisterComponent}
    ]
  },
  {
    path: 'dashboard', component: MasterPageComponent,
    children: [
      {path: '', component: AdminDashboardComponent}
    ]
  },
  {
    path: 'statistic', component: MasterPageComponent,
    children: [
      {path: '', component: AdminStatisticComponent}
    ]
  },
  {
    path: 'approve', component: MasterPageComponent,
    children: [
      {path: '', component: ApproveComponent}
    ]
  },
  {
    path: 'about', component: MasterPageComponent,
    children: [
      {path: '', component: AboutComponent}
    ]
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {path: '**', component: NotFoundComponent}
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
    SidenavComponent,
    HeaderComponent,
    NewsDetailComponent,
    NewsCreaterComponent,
    NewsEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpModule,
    ...ApplicationEffects,
    StoreModule.provideStore({newsReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SFCommonModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      }), // router debug
    VirtualScrollModule
  ],
  providers: [NewsRepository],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}


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

// store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NewsRepository } from './store/news';
import { FestivalEventRepository } from './store/festivalEvent';
import { ApplicationStoreModule, ApplicationEffects } from './store';
import newsReducer from './store/news/news.reducer';
import festivalEventReducer from './store/festivalEvent/festivalEvent.reducer';
// containers
import {
  AppComponent,
  CommonComponent,
  MasterPageComponent,
  FullFeedComponent,
  NewsFeedComponent,
  FestivalEventFeedComponent,
  CalendarComponent,
  PersonalComponent,
  AdminDashboardComponent,
  WorksFeedComponent,
  AdminStatisticComponent,
  ApproveComponent
} from './app/containers';

import {
  NotFoundComponent,
  FestivalEventItemComponent,
  LoginComponent,
  RegisterComponent,
  AboutComponent
  SidenavComponent,
  HeaderComponent
} from './app/components';
// routes






import { SFCommonModule } from './commonApp/common.module';const appRoutes: Routes = [
  { path: 'common', component: CommonComponent },
  {
    path: 'feed', component: MasterPageComponent,
    children: [
      { path: '', component: FullFeedComponent },
      { path: 'news', component: NewsFeedComponent },
      { path: 'events', component: FestivalEventFeedComponent },
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
    FestivalEventFeedComponent,
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
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ...ApplicationEffects,
    StoreModule.provideStore({ newsReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SFCommonModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      }), // router debug
    VirtualScrollModule
  ],
  providers: [NewsRepository],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


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
// routes
const appRoutes: Routes = [
  {
    path: 'common', component: MasterPageComponent,
    children: [
      { path: '', component: CommonComponent }
    ]
  },
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
    ...ApplicationEffects,
    StoreModule.provideStore({
      newsReducer: newsReducer,
      festivalEventReducer: festivalEventReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SFCommonModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      }), // router debug
    VirtualScrollModule
  ],
  providers: [NewsRepository, FestivalEventRepository],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

