import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app/containers/root/app.component';

import { NewsRepository } from './store/news';
import { newsReducer } from './store/news/';
import { ApplicationStoreModule, ApplicationEffects } from './store';

import { SFCommonModule } from './commonApp/common.module';

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
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SFCommonModule.forRoot()
  ],
  providers: [NewsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
