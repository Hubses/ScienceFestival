import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsRepository} from '../../../store/news'

@Component({
  selector: 'sf-news-editor',
  templateUrl: 'news-editor.component.html',
  styleUrls: ['./news-editor.component.less']
})
export class NewsEditorComponent implements OnInit {

  public news: sf.entities.News;
  public content: string;

  constructor(private route: ActivatedRoute, private newsRepository: NewsRepository) {
  }

  ngOnInit() {
    let newsId: number;
    this.route.params.subscribe(params => {
      newsId = params['id'];
    });

    this.newsRepository.getNewsItemById(newsId).subscribe(n => this.news = n);
    this.content = this.news.content;
  }

  onSave(): void {
  }
}
