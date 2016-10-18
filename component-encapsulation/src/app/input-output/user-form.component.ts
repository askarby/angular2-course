import {Component, EventEmitter, Input, Output} from '@angular/core';

export class User {
  public username: string;
  public password: string;
}

@Component({
  selector: 'form[name=user]',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  @Output()
  private userChange: EventEmitter<User>;
  private _user: User;

  public constructor() {
    this.userChange = new EventEmitter<User>();
  }

  @Input()
  public set user(user: User) {
    this._user = user;
    this.userChange.emit(user);
  }

  public get username() {
    return this._user.username;
  }

  public set username(username: string) {
    this._user.username = username;
    this.userChange.emit(this._user);
  }

  public get password() {
    return this._user.password;
  }

  public set password(password: string) {
    this._user.password = password;
    this.userChange.emit(this._user);
  }



}
