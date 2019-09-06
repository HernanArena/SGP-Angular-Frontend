
import * as fromNavigationActions from '../actions/navigation.actions';

export interface RouteState {
  rutaAnterior: string;
  rutaActual:string;
};

const initState: RouteState = {
  rutaAnterior:null,
  rutaActual:null
};

export function navigationReducers (state:RouteState = initState,action: fromNavigationActions.RouteAcciones):RouteState{
  switch(action.type){
    case fromNavigationActions.CARGAR_AFTERROUTE:
      return {
          ...state,
          rutaAnterior: action.route.after
      };
    case fromNavigationActions.CARGAR_BEFOREROUTE:
    return {
        ...state,
        rutaActual: action.route.before
    };
    default:
      return state;
  }
}
