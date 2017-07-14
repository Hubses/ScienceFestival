import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {NewsRepository} from '../../../store/news'

@Component({
  selector: 'sf-news-detail',
  templateUrl: 'news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})

export class NewsDetailComponent implements OnInit {

  public newsId: number;
  public news: News;

  constructor(private route: ActivatedRoute, private newsRepository: NewsRepository) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsId = params['id'];
    });

    this.newsRepository.getNewsItemById(this.newsId).subscribe(n => this.news = n);
    console.log(this.news);
  }
}
