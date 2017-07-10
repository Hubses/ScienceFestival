import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';


import {
    InputComponent,
    SpinnerComponent,
    ButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    IconComponent
} from './';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule
        
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
         ButtonComponent,
         InputComponent,
         RadioButtonComponent,
         CheckboxComponent,
         IconComponent
    
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
         IconComponent
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
