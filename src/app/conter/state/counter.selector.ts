import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


export const getCounterState = createFeatureSelector<CounterState>('counter');

export const counterSelector = createSelector(getCounterState, (state) => {
    return state.counter;
})