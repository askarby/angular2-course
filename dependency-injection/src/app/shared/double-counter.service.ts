import {IncrementableCounter} from "../shared/counter.contract";

export class DoubleCounterService implements IncrementableCounter {
  private counter:number;

  constructor() {
    this.counter = 0;
  }

  public getCount() {
    return this.counter;
  }

  public increment() {
    this.counter += 2;
  }

}
