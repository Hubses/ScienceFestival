import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { TwoRoutingModule } from './two-routing.module';
import { HomeComponent } from './home/home.component';
import { TodosService } from './services/todos.service';
import { TodosEffectsService } from './effects/todos-effects.service';
import { HackedEffectsModule } from '../hacked-effects/hacked-effects.module';

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule,
    HttpModule,
    StoreModule,
    HackedEffectsModule.run(TodosEffectsService)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    TodosService
  ]
})
export class TwoModule {
  constructor() {
    console.log('TwoModule instantiated.');
  }
}
