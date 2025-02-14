import { Injectable } from '@angular/core';
import { signalStore, withState, withMethods } from '@angular/core/signals';

interface CounterState {
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class CounterStore {
  private store = signalStore(
    { count: 0 }, // Initial State
    withState<CounterState>(),
    withMethods((state: CounterState) => ({
      increment: () => state.count++, 
      decrement: () => state.count--,
      reset: () => (state.count = 0),
    }))
  );

  // Expose signals to components
  count = this.store.state.count;
  increment = this.store.methods.increment;
  decrement = this.store.methods.decrement;
  reset = this.store.methods.reset;
}
