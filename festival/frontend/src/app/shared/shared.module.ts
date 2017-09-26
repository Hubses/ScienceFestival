import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { HackedEffectsModule } from '../hacked-effects/hacked-effects.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }

  constructor() {
    console.log('SharedModule instantiated.');
  }
}
