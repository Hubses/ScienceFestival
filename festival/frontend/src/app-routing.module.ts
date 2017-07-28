import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';

import { AppComponent } from "./app/containers/root/app.component";

export const appRoutes: Routes = [
    // { path: '', component: AppComponent },
    // { path: 'core', loadChildren: './app/core/core.module#CoreModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        LocalizeRouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule, LocalizeRouterModule],
    providers: []
})
export class AppRoutingModule { }
