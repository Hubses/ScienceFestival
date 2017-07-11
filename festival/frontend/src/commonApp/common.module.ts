import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
    InputComponent,
    SpinnerComponent,
<<<<<<< HEAD
    ButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    IconComponent
=======
    TabGroupComponent,
    TabComponent,
    FormComponent,
    CardComponent
>>>>>>> 52b79dcf24b6e9cb0cc55ae71889ce68c5e03822
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
<<<<<<< HEAD
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
         IconComponent
    
=======
        TabGroupComponent,
        FormComponent,
        TabComponent,
        CardComponent
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
         IconComponent
=======
        TabGroupComponent,
        FormComponent,
        CardComponent
>>>>>>> 52b79dcf24b6e9cb0cc55ae71889ce68c5e03822
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
