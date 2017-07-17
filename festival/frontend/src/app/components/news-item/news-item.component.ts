import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'sf-news-item',
  templateUrl: 'news-item.component.html',
  styleUrls: ['./news-item.component.less']
})

export class NewsItemComponent implements OnInit {
  @Input() news: sf.entities.News;

  public flag: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSelect(news: sf.entities.News) {
    this.router.navigate(['feed/news/', news.id]);
  }

  onEdit(news: sf.entities.News) {
    this.router.navigate(['feed/edit/news', news.id]);
  }

  onDelete(news: sf.entities.News) {
  }
}
