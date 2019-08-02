import * as fromBuscarPartes from '../actions/searchTickets.actions';
import { Parte } from 'src/app/models/parte.model';

export interface BuscarPartesState{
  parte: Parte[];
  termino: string;
  loaded: boolean;
  loading: boolean;
  error: any;
  oktonavigate:boolean;
}

const estadoInicial:BuscarPartesState =  {
  parte: null,
  termino: null,
  loaded: false,
  loading: false,
  error: null,
  oktonavigate: false
};

export function buscarParteReducer(state = estadoInicial, action: fromBuscarPartes.buscadorParteAcciones):BuscarPartesState{
  switch(action.type){
    case fromBuscarPartes.CARGAR_PARTES:
      return {
        ...state,
        loaded:true,
        loading: false,
        error:null,
        termino: action.termino,
        oktonavigate: false
        };
    case fromBuscarPartes.CARGAR_PARTES_SUCCESS:
      return {
        ...state,
        loaded:true,
        loading:false,
        error: null,
        parte:[...action.parte],
        oktonavigate: true
      };
    case fromBuscarPartes.CARGAR_PARTES_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        oktonavigate: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };
    case fromBuscarPartes.MODIFICAR_OKTONAVIGATE:
      return {
          ...state,
          oktonavigate: action.oktonavigate
        }
    case fromBuscarPartes.LIMPIAR_PARTES:
        return {
          parte: null,
          termino: null,
          loaded: false,
          loading: false,
          error: null,
          oktonavigate: false
        }
    default:
      return state;

    };
}
