import { CounterState } from './counter.types';
import { create } from 'zustand';

const useCounter = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : state.count })),
}));

export default useCounter;
