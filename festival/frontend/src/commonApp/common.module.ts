import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import {
    InputComponent,
    SpinnerComponent,
    ButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    IconComponent,
    InputNumbComponent,
    TabGroupComponent,
    TabComponent,
    FormComponent,
    CardComponent,
    DropdownComponent,
    MenuComponent,
    SidenavComponent,
    MapComponent
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB_TXfNWY4Vw5b7kTwo--qgSqt_ERZ9BiY'
        })
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
        ButtonComponent,
        InputComponent,
        RadioButtonComponent,
        CheckboxComponent,
        IconComponent,
        InputNumbComponent,
        TabGroupComponent,
        FormComponent,
        TabComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        SidenavComponent,
        MapComponent
    ],
    providers: [/* TODO: Providers go here */],
    exports: [
        MaterialModule,
        InputComponent,
        SpinnerComponent,
        ButtonComponent,
        InputComponent,
        RadioButtonComponent,
        CheckboxComponent,
        IconComponent,
        InputNumbComponent,
        TabGroupComponent,
        FormComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        MapComponent
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
