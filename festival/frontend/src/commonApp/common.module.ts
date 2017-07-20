import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from "ap-angular2-fullcalendar";

import {
    InputComponent,
    SpinnerComponent,
    ButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    IconComponent,
    InputNumbComponent,
    FormComponent,
    CardComponent,
    DropdownComponent,
    MenuComponent,
    CalendarComponent,
    AccordionComponent,
    MapComponent,
    HeaderComponent,
    TextAreaComponent,
    FileChooseComponent,
    TableComponent
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        CalendarModule,
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
        FormComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        AccordionComponent,
        MapComponent,
        HeaderComponent,
        CalendarComponent,
        TextAreaComponent,
        FileChooseComponent,
        TableComponent
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
        FormComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        MapComponent,
        AccordionComponent,
        HeaderComponent,
        CalendarComponent,
        TextAreaComponent,
        FileChooseComponent,
        TableComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SFCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SFCommonModule,
            //providers: [] // service
        }
    }
}
