import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';


import {
    InputComponent,
    SpinnerComponent
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule
    ],
    declarations: [
        InputComponent,
        SpinnerComponent
    ],
    providers: [/* TODO: Providers go here */],
    exports: [
        InputComponent,
        SpinnerComponent
    ]
})
export class SFCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SFCommonModule,
            //providers: [] // service
        }
    }
}
