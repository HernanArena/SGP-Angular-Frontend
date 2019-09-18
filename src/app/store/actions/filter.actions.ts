import{ Action } from '@ngrx/store'
import { Filtro } from '../../models/filtro.model';


export const CARGAR_FILTER = '[FILTER cargar] Cargar filtro..';
export const LIMPIAR_FILTER = '[FILTER limpiar] filtro borrado';
export const AGREGAR_VERSION_FILTER = '[FILTER Agregar] Agregar version';
export const AGREGAR_MODULO_FILTER = '[FILTER Agregar] Agregar modulo';
export const AGREGAR_OBJETO_FILTER = '[FILTER Agregar] Agregar objeto';
export const AGREGAR_TERMINO_FILTER = '[FILTER Agregar] Agregar termino';
export const AGREGAR_CONTACTO_FILTER = '[FILTER Agregar] Agregar contacto';

export class CargarFilterAction implements Action {
  readonly type = CARGAR_FILTER;
  constructor(public filtro:Filtro){}
}
export class AgregarFilterVersionAction implements Action {
  readonly type = AGREGAR_VERSION_FILTER;
  constructor(public version:string){}
}
export class AgregarFilterModuloAction implements Action {
  readonly type = AGREGAR_MODULO_FILTER;
  constructor(public modulo:string){}
}
export class AgregarFilterObjetoAction implements Action {
  readonly type = AGREGAR_OBJETO_FILTER;
  constructor(public modulo:string, public objeto:string){}
}
export class AgregarFilterTerminoAction implements Action {
  readonly type = AGREGAR_TERMINO_FILTER;
  constructor(public termino:string){}
}
export class AgregarFilterContactoAction implements Action {
  readonly type = AGREGAR_CONTACTO_FILTER;
  constructor(public contacto:string){}
}
export class LimpiarFilterAction implements Action{
  readonly type = LIMPIAR_FILTER;
}

export type filterAcciones = CargarFilterAction |
                             LimpiarFilterAction |
                             AgregarFilterVersionAction |
                             AgregarFilterModuloAction |
                             AgregarFilterObjetoAction |
                             AgregarFilterTerminoAction |
                             AgregarFilterContactoAction;
