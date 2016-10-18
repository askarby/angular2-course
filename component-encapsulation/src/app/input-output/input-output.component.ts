import {Component} from '@angular/core';
import {User} from './user-form.component';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent  {
  private anders: User;

  constructor() {
    this.anders = new User();
    this.anders.username = 'Anders';
    this.anders.password = 'secret';
  }

}
