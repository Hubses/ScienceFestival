import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'sf-news-item',
  templateUrl: 'news-item.component.html',
  styleUrls: ['./news-item.component.less']
})

export class NewsItemComponent implements OnInit {
  @Input() news: News;

  public flag: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  onSelect(news: News) {
    this.router.navigate(['news/', news.id]);
  }
}
