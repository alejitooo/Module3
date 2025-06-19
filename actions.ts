import { createAction, props } from '@ngrx/store';

export const agregarElemento = createAction(
  '[Elementos] Agregar',
  props<{ elemento: any }>()
);
