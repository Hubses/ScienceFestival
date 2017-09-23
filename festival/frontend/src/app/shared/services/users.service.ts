import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  loadUsers(): Observable<User[]> {
    return this.http.get(`${environment.baseApiUrl}/users`)
      .map(res => res.json());
  }
}
