import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// backend users
export const USERS: sf.entities.User[] = [{
    id: 1,
    email: 'example@example.com',
    isApproved: true,
    role: 'admin'
},
{
    id: 2,
    email: 'example2@example.com',
    isApproved: true,
    role: 'user'
}];

@Injectable()
export class UserRepository {

    constructor() {
    }

    getUser(userEmail: string): Observable<sf.entities.User> {
        const user = USERS.find((user) => user.email === userEmail);
        return Observable.of(user);
    }
    getUserRole(user: sf.entities.User): string {
        return user.role;
    }
}
