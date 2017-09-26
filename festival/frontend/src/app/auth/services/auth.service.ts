import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

    constructor(private http: Http) { }

    public loadUsers(): User[] {
        return users;
    }
    public login(securityUser: Security): Observable<User> {
        const findUser$ = of(users.find((users: User) => users.username === securityUser.username ? this._isAuthentificate = true : this._isAuthentificate = false));
        return findUser$;
    }

    public register({ username, password }: Security): Observable<User> {
        const newUser: User = { username: username, role: sf.auth.UserRoles.USER };
        users.push(newUser);
        return of(newUser);
    }

    public logout(): Observable<boolean> {
        this._isAuthentificate = false;
        return of(this._isAuthentificate);
    }
}
