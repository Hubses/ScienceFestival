import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getNewsAction } from '../../../store/news/';
import { LocalizeRouterService } from "localize-router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public localization: sf.common.DropdownOptions<string>;

  constructor(
    private localize: LocalizeRouterService
  ) { }

  ngOnInit(): void {
  }
}
