import {Action} from '@ngrx/store';
 import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[Login Usuario] Cargar usuario';
// export const CARGAR_USUARIO_FAIL = '[Login Usuario] Cargar usuario FAIL';
// export const CARGAR_USUARIO_SUCCESS = '[Login Usuario] Cargar usuario SUCCESS';

export const LIMPIAR_USUARIO = '[Logout Usuario] Limpiar usuario';

//Login
export class CargarUsuario implements Action{
  readonly type = CARGAR_USUARIO;
  // constructor(public uid: string,public pwd:string){}
  constructor(public usuario:Usuario){}
}

// export class CargarUsuarioFail implements Action{
//   readonly type = CARGAR_USUARIO_FAIL;
//   constructor(public payload:any){}
// }
//
// export class CargarUsuarioSuccess implements Action{
//   readonly type = CARGAR_USUARIO_SUCCESS;
//   constructor(public usuario:Usuario){}
// }

//Logout
export class LimpiarUsuario implements Action{
  readonly type = LIMPIAR_USUARIO;
}


export type usuarioAcciones = CargarUsuario |
                               LimpiarUsuario;
