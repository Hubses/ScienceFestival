import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app/app.component';

import { NewsRepository } from './store/news';
import { newsReducer } from './store/news/';
import { ApplicationStoreModule, ApplicationEffects } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...ApplicationEffects,
    StoreModule.provideStore({ newsReducer }),
  ],
  providers: [NewsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
