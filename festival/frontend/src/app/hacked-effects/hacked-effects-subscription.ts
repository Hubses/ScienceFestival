import { Injectable, OpaqueToken, OnDestroy, Inject, Optional, SkipSelf } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { Store } from '@ngrx/store';
import { Actions, mergeEffects } from '@ngrx/effects';
import { merge } from 'rxjs/observable/merge';

export const effects = new OpaqueToken('ngrx/effects: Effects');
window['effectsAdded'] = [];

@Injectable()
export class HackedEffectsSubscription extends Subscription implements OnDestroy {
  constructor(@Inject(Store) private store: Observer<Actions>,
              @Optional() @SkipSelf() public parent: HackedEffectsSubscription,
              @Optional() @Inject(effects) effectInstances?: any[]) {
    super();
    if (Boolean(parent)) {
      parent.add(this);
    }

    if (Boolean(effectInstances)) {
      this.addEffects(effectInstances);
    }
  }

  addEffects(effectInstances: any[]): void {
    if (Boolean(effectInstances) && !~window['effectsAdded'].indexOf(effectInstances[0].constructor.name)) {
      window['effectsAdded'].push(effectInstances[0].constructor.name);
      const sources = effectInstances.map(mergeEffects);
      const merged = merge(...sources);
      this.add(merged.subscribe(this.store));
    }
  }

  ngOnDestroy() {
    if (!this.closed) {
      this.unsubscribe();
    }
  }
}
