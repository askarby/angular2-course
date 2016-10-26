import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[];

  constructor() {
    this.users = [
      { id: 1, name: 'Anders', role: 'ADMIN', password: 'hemmeligt'},
      { id: 2, name: 'Sigurd', role: 'USER', password: 'hemmeligt'},
      { id: 3, name: 'Bent', role: 'USER', password: 'hemmeligt'}
    ]
  }

  public getAll() {
    return Observable.of(this.users);
  }

  public getById(id: number): User {
    const found = this.users.filter((user) => user.id === id)[0];
    return Object.assign({}, found);
  }

}
