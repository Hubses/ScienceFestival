import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { OneRoutingModule } from './one-routing.module';
import { HomeComponent } from './home/home.component';
import { PostsService } from './services/posts.service';
import { PostsEffectsService } from './effects/posts-effects.service';
import { HackedEffectsModule } from '../hacked-effects/hacked-effects.module';

@NgModule({
  imports: [
    CommonModule,
    OneRoutingModule,
    HttpModule,
    StoreModule,
    HackedEffectsModule.run(PostsEffectsService)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    PostsService
  ]
})
export class OneModule {
  constructor() {
    console.log('OneModule instantiated.');
  }
}
