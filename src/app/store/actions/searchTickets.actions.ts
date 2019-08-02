import {Action} from '@ngrx/store';
import { Parte } from 'src/app/models/parte.model';

export const CARGAR_PARTES = '[DownloadTickets buscadorPartes] buscar partes';
export const CARGAR_PARTES_FAIL = '[DownloadTickets buscadorPartes] buscar partes FAIL';
export const CARGAR_PARTES_SUCCESS = '[DownloadTickets buscadorPartes] buscar partes SUCCESS';
export const MODIFICAR_OKTONAVIGATE = '[DownloadTickets buscadorPartes] buscar partes MODIFICAR OKTONAVIGATE';
export const LIMPIAR_PARTES = '[DownloadTickets buscadorPartes] buscar partes LIMPIAR PARTES';
//buscar
export class CargarPartes implements Action{
  readonly type = CARGAR_PARTES;
  constructor(public termino?:string){}
}

export class CargarPartesFail implements Action{
  readonly type = CARGAR_PARTES_FAIL;
  constructor(public payload:any){}
}

export class CargarPartesSuccess implements Action{
  readonly type = CARGAR_PARTES_SUCCESS;
  constructor(public parte:Parte[]){}
}

export class ModificarOkToNavigate implements Action{
  readonly type = MODIFICAR_OKTONAVIGATE;
  constructor(public oktonavigate:boolean){}
}
export class LimpiarPartesAction implements Action{
  readonly type = LIMPIAR_PARTES;
}


export type buscadorParteAcciones = CargarPartes |
                              CargarPartesFail|
                              CargarPartesSuccess|
                              ModificarOkToNavigate|
                              LimpiarPartesAction;
