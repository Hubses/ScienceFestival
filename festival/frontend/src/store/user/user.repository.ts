import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// backend users
export const BACKENDUSERS: sf.entities.User[] = [{
    id: 1,
    email: 'example@example.com',
    password: '123',
    isApproved: true,
    role: 'admin'
},
{
    id: 2,
    email: 'example@example.com',
    password: 'qwe',
    isApproved: true,
    role: 'user'
}];

@Injectable()
export class UserRepository {

    constructor() {
    }

    getUser(userId: number): Observable<sf.entities.User> {
        const user = BACKENDUSERS.find((user) => user.id === userId);
        return Observable.of(user);
    }
    getUserRole(user: sf.entities.User): string {
        return user.role;
    }
}
