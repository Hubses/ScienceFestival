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
<<<<<<< HEAD
    ButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    IconComponent,
=======
    TabGroupComponent,
    TabComponent,
    FormComponent,
    CardComponent,
    DropdownComponent,
    MenuComponent,
    SidenavComponent
>>>>>>> 52b79dcf24b6e9cb0cc55ae71889ce68c5e03822
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule
        
=======
        MaterialModule,
        BrowserAnimationsModule,
>>>>>>> 52b79dcf24b6e9cb0cc55ae71889ce68c5e03822
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
<<<<<<< HEAD
         ButtonComponent,
         InputComponent,
         RadioButtonComponent,
         CheckboxComponent,
         IconComponent,
    
=======
        TabGroupComponent,
        FormComponent,
        TabComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        SidenavComponent
>>>>>>> 52b79dcf24b6e9cb0cc55ae71889ce68c5e03822
    ],
    providers: [/* TODO: Providers go here */],
    exports: [
        MaterialModule,
        InputComponent,
        SpinnerComponent,
<<<<<<< HEAD
         ButtonComponent,
         InputComponent,
         RadioButtonComponent,
         CheckboxComponent,
         IconComponent,
=======
        TabGroupComponent,
        FormComponent,
        CardComponent,
        DropdownComponent,
        MenuComponent,
        SidenavComponent
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
