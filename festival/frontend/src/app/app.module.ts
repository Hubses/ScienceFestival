import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NewsRepository } from '../store/news';

import { ApplicationStoreModule, ApplicationEffects } from '../store';
import { newsReducer } from "../store/news/";

import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";

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
