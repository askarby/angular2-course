import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public user: User;
  public previous: number;
  public next: number;

  private subscription: Subscription;

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.user = this.service.getById(+params['id']);
      this.previous = this.user.id > 1 ? this.user.id - 1 : null;
      this.next = this.user.id < 3 ? this.user.id + 1 : null;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
