import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { back, forward, go, replace, show, search } from "@ngrx/router-store";

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/Observable/of";
import { environment } from '../../../environments/environment';

import { User, Security } from '@sf/auth';

export enum UserRoles {
    ADMIN,
    ORGCOMITEETE,
    JURI,
    USER
}
const users: User[] = [{
    username: 'test',
    role: UserRoles.ADMIN
},
{
    username: 'test2',
    role: UserRoles.JURI
}];

@Injectable()
export class AuthService {
    private _isAuthentificate = false;

    constructor(
        private http: Http,
        private router: Router) { }

    public loadUsers(): User[] {
        return users;
    }
    private isHaveUser(user: User): boolean {
        const isHaveUser = (users.find((users: User) => users.username === user.username)) ? true : false;
        return isHaveUser;
    }
    private getUserByUsername(findUser: User): User {
        return users.find((users: User) => users.username === findUser.username);
    }
    public login(securityUser: Security): Observable<User> {
        const findUser$ = of(users.find((users: User) => {
            if (users.username === securityUser.username) {
                this._isAuthentificate = true;
            } else {
                this._isAuthentificate = false;
            }
            return users.username === securityUser.username;
        }));
        return findUser$;
    }

    public register(secretUser: Security): Observable<User> {
        let newUser: User = { username: secretUser.username, role: UserRoles.USER };
        if (this.isHaveUser(newUser)) {
            newUser = this.getUserByUsername(newUser);
        } else {
            users.push(newUser);
        }
        return of(newUser);
    }

    public logout(): Observable<boolean> {
        this._isAuthentificate = false;
        return of(this._isAuthentificate);
    }
    public redirect(url: string): Observable<boolean> {
        return Observable.fromPromise(this.router.navigate([url]));
    }
}
