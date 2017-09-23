import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsRepository } from '../../../store/news'

@Component({
  selector: 'sf-news-creator',
  templateUrl: 'news-creator.component.html',
  styleUrls: ['./news-creator.component.less']
})
export class NewsCreaterComponent {
  public news: sf.entities.News;

  constructor() {
  }

  ngOnInit() { }

  onSave(): void {

  }
}
