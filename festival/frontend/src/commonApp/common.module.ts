import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
    InputComponent,
    SpinnerComponent,

    ButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    IconComponent,

    TabGroupComponent,
    TabComponent,
    FormComponent,
    CardComponent,
    DropdownComponent,
    MenuComponent,
    SidenavComponent,
    AccordionComponent
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
        ButtonComponent,
        InputComponent,
        RadioButtonComponent,
        CheckboxComponent,
        IconComponent,
        TabGroupComponent,
        FormComponent,
        TabComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        SidenavComponent,
        AccordionComponent
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
        TabGroupComponent,
        FormComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        AccordionComponent
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
