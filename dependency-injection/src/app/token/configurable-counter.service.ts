import { Injectable, Inject } from "@angular/core";
import {IncrementableCounter} from "../shared/counter.contract";
import { CounterConfig, COUNTER_CONFIG } from "./counter.config";

@Injectable()
export class ConfigurableCounterService implements IncrementableCounter {
  private count: number;

  constructor(@Inject(COUNTER_CONFIG) config: CounterConfig) {
    this.count = config.seed;
  }

  public getCount() {
    return this.count;
  }

  public increment() {
    this.count++;
  }
}
