import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';
import { environment } from '../../../environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  loadPosts(userId: number): Observable<Post[]> {
    return this.http.get(`${environment.baseApiUrl}/posts?userId=${userId}`)
      .map(res => res.json());
  }
}
