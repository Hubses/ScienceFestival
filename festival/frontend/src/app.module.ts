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
  MasterPageComponent
} from './app/containers';
// components
import {
  NotFoundComponent,
  NewsFeedComponent,
  NewsComponent
} from './app/components';
// routes
const appRoutes: Routes = [
  { path: 'common', component: CommonComponent },
  {
    path: 'feed', component: MasterPageComponent,
    children: [
      { path: '', component: NewsFeedComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },{
    path: 'news', component: NewsFeedComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    NotFoundComponent,
    MasterPageComponent,
    NewsFeedComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...ApplicationEffects,
    StoreModule.provideStore({ newsReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SFCommonModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    VirtualScrollModule
  ],
  providers: [NewsRepository],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
