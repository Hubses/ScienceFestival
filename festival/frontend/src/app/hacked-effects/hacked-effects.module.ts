import { NgModule, APP_BOOTSTRAP_LISTENER, Injector, Type, ModuleWithProviders } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { HackedEffectsSubscription, effects } from './hacked-effects-subscription';
import { runAfterBootstrapEffects, afterBootstrapEffects } from '@ngrx/effects/src/bootstrap-listener';

@NgModule({
  providers: [
    Actions,
    HackedEffectsSubscription,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [Injector, HackedEffectsSubscription],
      useFactory: runAfterBootstrapEffects
    }
  ]
})
export class HackedEffectsModule {
  static run(type: Type<any>): ModuleWithProviders {
    return {
      ngModule: HackedEffectsModule,
      providers: [
        HackedEffectsSubscription,
        type,
        { provide: effects, useExisting: type, multi: true }
      ]
    };
  }

  static runAfterBootstrap(type: Type<any>): ModuleWithProviders {
    return {
      ngModule: HackedEffectsModule,
      providers: [
        type,
        { provide: afterBootstrapEffects, useExisting: type, multi: true }
      ]
    };
  }
}
