import { createReducer, on } from '@ngrx/store';
import { agregarElemento } from './actions';

export const initialState: any[] = [];

export const elementosReducer = createReducer(
  initialState,
  on(agregarElemento, (state, { elemento }) => [...state, elemento])
);
