import{ Action } from '@ngrx/store'
import { Navigation } from 'src/app/models/navigation.model';

export const CARGAR_BEFOREROUTE = '[NAVIGATION cargar siguiente] Cargar ruta siguiente..';
export const CARGAR_AFTERROUTE = '[NAVIGATION cargar anterior] Cargar ruta anterior..';

export class CargarBeforeRouteAction implements Action {
  readonly type = CARGAR_BEFOREROUTE;
  constructor(public route:Navigation){}
}
export class CargarAfterRouteAction implements Action {
  readonly type = CARGAR_AFTERROUTE;
  constructor(public route:Navigation){}
}

export type RouteAcciones = CargarBeforeRouteAction |
                            CargarAfterRouteAction
