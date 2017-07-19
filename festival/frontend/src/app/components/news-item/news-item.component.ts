import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'sf-news-item',
  templateUrl: 'news-item.component.html',
  styleUrls: ['./news-item.component.less']
})

export class NewsItemComponent implements OnInit {
  @Input() news: sf.entities.News;
  @Output() onViewDetail: EventEmitter<sf.entities.News> = new EventEmitter<sf.entities.News>()

  public flag: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  viewDetail(news: sf.entities.News) {
    this.onViewDetail.emit(news);
  }
  // onSelect(news: sf.entities.News) {
  //   this.router.navigate(['/en/admin/feed/news', news.id]);
  // }
  //
  // onEdit(news: sf.entities.News) {
  //   this.router.navigate(['/en/admin/feed/news/edit/', news.id]);
  // }
}
