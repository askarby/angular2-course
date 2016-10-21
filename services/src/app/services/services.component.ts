import { Component, OnInit } from '@angular/core';
import { StorageService } from "./storage.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  private words: string[];

  public constructor(private service: StorageService) {
    this.words = [];
  }

  ngOnInit() {
    this.words = this.service.getAll();
  }

  public addWord(word: string) {
    this.service.add(word);
  }

}
