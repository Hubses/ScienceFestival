import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getNewsAction } from '../../../store/news/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {


  public news: News[];

  title = 'app works!';
  public tabs: sf.common.Tab[] = [
    {
      id: 1,
      title: '123',
      content: '<div> 123 </div>'
    }
  ]
  public dropdownOptions = {
    placeholder: 'qwe',
    values: ['123', '456']
  }

  public dropdownSelect: number | string;

  constructor(private store: Store<sf.store.NewsStore>) { }

  ngOnInit(): void {
    this.store.select(s => s.newsReducer).subscribe(n => this.news = n.entity);
    this.store.dispatch(getNewsAction());
  }
}
