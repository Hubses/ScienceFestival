import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';


import { InputComponent } from './input/input.component';
import {  } from "./spinner/spinner.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule
    ],
    declarations: [InputComponent],
    providers: [/* TODO: Providers go here */],
    exports: [InputComponent]
})
export class SFCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SFCommonModule,
            //providers: [] // service
        }
    }
}
