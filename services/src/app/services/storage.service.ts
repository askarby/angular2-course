import { Injectable } from '@angular/core';

const KEY = "word";

@Injectable()
export class StorageService {
  private storage: Storage;
  private words: string[];

  constructor() {
    this.storage = localStorage;
    this.words = JSON.parse(this.storage.getItem(KEY)) ||[];
  }

  public add(word: string) {
    this.words.push(word);
    this.storage.setItem(KEY, JSON.stringify(this.words));
  }

  public getAll(): string[] {
    return this.words;
  }

}
