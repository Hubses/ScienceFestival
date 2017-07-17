import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsRepository} from '../../../store/news'

@Component({
  selector: 'sf-news-detail',
  templateUrl: 'news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})
export class NewsDetailComponent implements OnInit {

  public news: News;

  constructor(private route: ActivatedRoute, private newsRepository: NewsRepository) {
  }

  ngOnInit() {
    let newsId: number;
    this.route.params.subscribe(params => {
      newsId = params['id'];
    });

    this.newsRepository.getNewsItemById(newsId).subscribe(n => this.news = n);
  }
}
