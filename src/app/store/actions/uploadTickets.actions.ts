import {Action} from '@ngrx/store';
import { Parte } from 'src/app/models/parte.model';
import { Contacto } from 'src/app/models/contacto.model';

export const GUARDAR_PARTES = '[uploadTickets DescargaPartes] guardar partes';
export const GUARDAR_PARTES_FAIL = '[uploadTickets DescargaPartes] guardar partes FAIL';
export const GUARDAR_PARTES_SUCCESS = '[uploadTickets DescargaPartes] guardar partes SUCCESS';
export const AGREGAR_CONTACTO = '[uploadTickets Agregar] Agregar contacto';
export const AGREGAR_DESCRIPCION = '[uploadTickets Agregar] Agregar Descripción';
export const AGREGAR_ADJUNTO = '[uploadTickets Agregar] Agregar adjunto';
//Guardar
export class GuardarPartes implements Action{
  readonly type = GUARDAR_PARTES;
  constructor(public descripcion:string, public adjunto:string){}
}

export class GuardarPartesFail implements Action{
  readonly type = GUARDAR_PARTES_FAIL;
  constructor(public payload:any){}
}

export class GuardarPartesSuccess implements Action{
  readonly type = GUARDAR_PARTES_SUCCESS;
  constructor(public parte:Parte){}
}
export class AgregarContactoAction implements Action {
  readonly type = AGREGAR_CONTACTO;
  constructor(public contacto:Contacto){}
}
export class AgregarDescripcionAction implements Action {
  readonly type = AGREGAR_DESCRIPCION;
  constructor(public descripcion:string){}
}
export class AgregarAdjuntoAction implements Action {
  readonly type = AGREGAR_ADJUNTO;
  constructor(public adjunto:string){}
}
export type generadorParteAcciones = GuardarPartes |
                                    GuardarPartesFail |
                                    GuardarPartesSuccess |
                                    AgregarContactoAction |
                                    AgregarDescripcionAction |
                                    AgregarAdjuntoAction;
