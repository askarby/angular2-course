import {Component} from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  public value: string;

  constructor() {
    this.value = "Test";
  }

}
