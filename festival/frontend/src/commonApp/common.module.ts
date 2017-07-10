import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { InputComponent } from './input/input.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
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
