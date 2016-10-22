import { OpaqueToken } from '@angular/core';

export interface CounterConfig {
  seed: number;
}

export let COUNTER_CONFIG = new OpaqueToken('counter.config');
