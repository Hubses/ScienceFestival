import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  AppComponent,
  CommonComponent
} from './app/containers';

import { NotFoundComponent } from './app/components'

import { NewsRepository } from './store/news';
import newsReducer from './store/news/news.reducer';

import { EventsRepository } from './store/events';
import eventsReducer from './store/events/events.reducer';
import { ApplicationStoreModule, ApplicationEffects } from './store';

import { SFCommonModule } from './commonApp/common.module';

const appRoutes: Routes = [
  { path: 'common', component: CommonComponent },
  {
    path: '',
    redirectTo: '/common',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    NotFoundComponent
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
      { enableTracing: true })
  ],
  providers: [NewsRepository, EventsRepository],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
