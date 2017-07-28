import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPageComponent } from "./containers/root/master-page/master-page.component";
import { LocalizeRouterModule } from "localize-router";

export const coreRoutes: Routes = [
    { path: '', component: MasterPageComponent },
    { path: 'news', loadChildren: '../news/news.module#NewsModule' }
];
@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes),
        LocalizeRouterModule.forChild(coreRoutes)
    ],
    exports: [RouterModule, LocalizeRouterModule],
    providers: []
})
export class CoreRoutingModule { }
