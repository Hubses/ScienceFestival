import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HackedEffectsModule } from '../hacked-effects/hacked-effects.module';
import { CoreRoutingModule } from './core-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { MasterPageComponent } from './containers/root/master-page/master-page.component';

import { ApplicationEffects } from "./effects/applicationEffects";
import { LocalizationService } from './repository/localization.repository';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        StoreModule,
        TranslateModule,
        CoreRoutingModule,
        EffectsModule.run(ApplicationEffects)
    ],
    providers: [LocalizationService],
    declarations: [MasterPageComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                LocalizationService,
                ApplicationEffects
            ]
        };
    }

    constructor() {
        console.log('CoreModule instantiated.');
    }
}