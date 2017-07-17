import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsRepository} from '../../../store/news'

@Component({
  selector: 'sf-news-editor',
  templateUrl: 'news-editor.component.html',
  styleUrls: ['./news-editor.component.less']
})
export class NewsEditorComponent implements OnInit {

  public news: News;
  public content: string;

  constructor() {
  }

  ngOnInit() {

  }

  onSave(): void {
    console.log(this.content);
  }
}
