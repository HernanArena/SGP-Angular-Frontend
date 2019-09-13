import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromReducers from './reducers';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState{
  ui: fromReducers.UIState;
  usuario:fromReducers.UsuarioState;
  navigation:fromReducers.RouteState;
  filtro:fromReducers.filterState;
  cargaresults: fromReducers.BuscarPartesState;
  partenuevo: fromReducers.GenerarPartesState;
}

export const appReducers:ActionReducerMap<AppState>= {
  ui: fromReducers.uiReducers,
  usuario: fromReducers.usuarioReducer,
  navigation: fromReducers.navigationReducers,
  filtro:fromReducers.filterReducers,
  cargaresults: fromReducers.buscarParteReducer,
  partenuevo: fromReducers.generarParteReducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['usuario','navigation','filtro','cargaresults','partenuevo'],rehydrate:true})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
