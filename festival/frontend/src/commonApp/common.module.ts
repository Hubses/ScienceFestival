import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
    InputComponent,
    SpinnerComponent,
    TabGroupComponent,
    TabComponent,
    FormComponent,
    CardComponent,
    DropdownComponent
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
        TabGroupComponent,
        FormComponent,
        TabComponent,
        CardComponent,
        DropdownComponent
    ],
    providers: [/* TODO: Providers go here */],
    exports: [
        MaterialModule,
        InputComponent,
        SpinnerComponent,
        TabGroupComponent,
        FormComponent,
        CardComponent,
        DropdownComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SFCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SFCommonModule,
            //providers: [] // service
        }
    }
}
