import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { EventRoutingModule } from "./event-routing.module";
import { HomeComponent } from "./home/home.component";
import { EventsService } from "./services/events.service";
import { EventsEffectsService } from "./effects/events-effects.service";
import { HackedEffectsModule } from "../hacked-effects/hacked-effects.module";

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    HttpModule,
    StoreModule,
    EffectsModule.run(EventsEffectsService)
    // HackedEffectsModule.run(TodosEffectsService)
  ],
  declarations: [HomeComponent],
  providers: [EventsService]
})
export class EventModule {
  constructor() {
    console.log("EventModule instantiated.");
  }
}
