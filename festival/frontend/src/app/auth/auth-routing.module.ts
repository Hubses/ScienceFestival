import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  ErrorComponent
} from "./components/";
import { HomeComponent } from "./containers";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule {}
