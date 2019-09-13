import {Action} from '@ngrx/store';
import { ParteNuevo } from 'src/app/models/partenuevo.model';

export const GUARDAR_PARTES = '[DownloadTickets DescargaPartes] guardar partes';
export const GUARDAR_PARTES_FAIL = '[DownloadTickets DescargaPartes] guardar partes FAIL';
export const GUARDAR_PARTES_SUCCESS = '[DownloadTickets DescargaPartes] guardar partes SUCCESS';

//Guardar
export class GuardarPartes implements Action{
  readonly type = GUARDAR_PARTES;
  constructor(public parte:ParteNuevo){}
}

export class GuardarPartesFail implements Action{
  readonly type = GUARDAR_PARTES_FAIL;
  constructor(public payload:any){}
}

export class GuardarPartesSuccess implements Action{
  readonly type = GUARDAR_PARTES_SUCCESS;
  constructor(public payload:any){}
}

export type generadorParteAcciones = GuardarPartes |
                                    GuardarPartesFail |
                                    GuardarPartesSuccess;
