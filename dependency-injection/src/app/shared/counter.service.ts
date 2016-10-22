import { Injectable } from "@angular/core";
import {IncrementableCounter} from "./counter.contract";

@Injectable()
export class CounterService implements IncrementableCounter {
  private count: number;
  private hasBeenSeeded: boolean;

  constructor() {
    this.count = 0;
  }

  public seed(value: number) {
    // Only allow seeding ONCE!
    if (!this.hasBeenSeeded) {
      this.hasBeenSeeded = true;
      this.count = value;
    }
  }

  public getCount() {
    return this.count;
  }

  public increment() {
    this.count++;
  }
}
