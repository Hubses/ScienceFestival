import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HackedEffectsModule } from "../hacked-effects/hacked-effects.module";
import { NewsRoutingModule } from "./news-routing.module";

import { NewsFeedComponent } from "./containers/news-feed/news-feed.component";
import { NewsRepository } from "./repository";
import { newsEffects } from "./effects";
// import { newsCollectionEffects } from "./effects/news.collection.effects";

import { reducers } from "./reducers";

@NgModule({
    imports: [
        CommonModule,
        NewsRoutingModule,
        StoreModule,
        HackedEffectsModule.run(newsEffects)
    ],
    declarations: [
        NewsFeedComponent
    ],
    providers: [NewsRepository]
})
export class NewsModule {
    constructor() {
        console.log('News module is initialized');
    }
}
