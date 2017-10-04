import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule, runAfterBootstrapEffects } from "@ngrx/effects";
import { AuthRoutingModule } from "./auth-routing.module";
import { HackedEffectsModule } from "../hacked-effects/hacked-effects.module";
import { AuthEffectsService } from "./effects/auth-effects.service";
import {
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  ErrorComponent
} from "./components/";
import { HomeComponent } from "./containers/";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpModule,
    StoreModule,
    EffectsModule.run(AuthEffectsService)
    // HackedEffectsModule.run(AuthEffectsService)
  ],
  declarations: [
    // containers
    HomeComponent,
    // components
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ErrorComponent
  ],
  providers: [AuthService, AuthEffectsService]
})
export class AuthModule {
  constructor() {
    console.log("Auth instantiated.");
  }
}
