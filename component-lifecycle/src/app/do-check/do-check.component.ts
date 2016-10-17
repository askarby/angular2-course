import {Component} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent {
  private currentUser: User;
  private users: User[];

  private candidates = [
    {username: 'Kriminalassistent Jensen', password: 'Unge mand'},
    {username: 'Bøffen', password: 'Den klarer jeg'},
    {username: 'Yvonne', password: 'Vorherre bevares'},
  ];

  constructor() {
    this.users = [];
    this.users.push(new User('Benny', 'skidegodt'));
    this.users.push(new User('Egon', 'lusede amatører'));
    this.users.push(new User('Kjeld', 'ja ja, jeg skal nok'));

    this.currentUser = this.users[0];
  }

  public addUser() {
    const entry = this.candidates[Math.floor(Math.random() * this.candidates.length)];
    this.users.push(new User(entry.username, entry.password));
    this.currentUser = this.users[this.users.length - 1];
  }

  public removeUser(user) {
    const idx = this.users.indexOf(user);
    if (idx > -1) {
      this.users.splice(idx, 1);
    }
  }
}
