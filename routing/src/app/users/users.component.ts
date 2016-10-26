import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  public users: User[];
  private subscription: Subscription;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.subscription = this.service.getAll().subscribe((users) => this.users = users);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
