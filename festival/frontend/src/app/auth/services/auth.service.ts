import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { back, forward, go, replace, show, search } from "@ngrx/router-store";

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/Observable/of";
import { environment } from '../../../environments/environment';

import { User, Security } from '@sf/auth';

// const userRoles = this.getUserRoles();
export enum userRoles {
    ADMIN,
    ORGCOMITEETE,
    JURI,
    USER
}
const users: User[] = [{
    username: 'test',
    role: userRoles.ADMIN
},
{
    username: 'test2',
    role: userRoles.JURI
}];

@Injectable()
export class AuthService {
    private _isAuthentificate = false;

    constructor(
        private http: Http,
        private router: Router) { }
    // add http
    public getUserRoles(): Observable<typeof userRoles> {
        return of(userRoles);
    }
    // add http
    public loadUsers(): User[] {
        return users;
    }
    private isHaveUser(user: User): boolean {
        const isHaveUser = (users.find((users: User) => users.username === user.username)) ? true : false;
        return isHaveUser;
    }
    private getUserByUsername(findUser: User): User {
        return users.find((user: User) => user.username === findUser.username);
    }
    public login(securityUser: Security): Observable<User> {
        const findUser$ = of(users.find((user: User) => {
            if (user.username === securityUser.username) {
                this._isAuthentificate = true;
            } else {
                this._isAuthentificate = false;
            }
            return user.username === securityUser.username;
        }));
        return findUser$;
    }
    public register(secretUser: Security): Observable<User> {
        let newUser: User = { username: secretUser.username, role: userRoles.USER };
        if (this.isHaveUser(newUser)) {
            newUser = this.getUserByUsername(newUser);
            return this.login(secretUser);
        } else {
            users.push(newUser);
            return of(newUser);
        }
    }

    public logout(): Observable<boolean> {
        this._isAuthentificate = false;
        return of(this._isAuthentificate);
    }
    // deprecate
    public redirect(url: string): Observable<boolean> {
        Observable.fromPromise(this.router.navigate([url]));
        throw new Error(`method ${this.redirect} has deprecated`);
    }
    public get isAuthentificate(): boolean {
        return this._isAuthentificate;
    }
}
