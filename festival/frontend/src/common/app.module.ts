import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { InputComponent } from './input.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [InputComponent],
    providers: [/* TODO: Providers go here */],
    exports: [InputComponent]
})
export class TestModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TestModule,
            //providers: [] // service
        }
    }
}
