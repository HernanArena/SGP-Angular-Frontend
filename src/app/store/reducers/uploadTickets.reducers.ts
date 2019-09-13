import * as fromGenerarPartes from '../actions/uploadTickets.actions';
import { ParteNuevo } from 'src/app/models/partenuevo.model';

export interface GenerarPartesState{
  parte:ParteNuevo,
  loading:boolean,
  loaded:boolean,
  error:any
}

const estadoInicial:GenerarPartesState =  {
  parte: null,
  loading: false,
  loaded: true,
  error: null
};

export function generarParteReducer(state = estadoInicial, action: fromGenerarPartes.generadorParteAcciones):GenerarPartesState{
  switch(action.type){
    case fromGenerarPartes.GUARDAR_PARTES:
      return {
        ...state,
        parte: action.parte,
        loaded:false,
        loading: true,
        error:null
        };
    case fromGenerarPartes.GUARDAR_PARTES_SUCCESS:
      return {
        ...state,
        loaded:true,
        loading:false,
        parte: action.payload,
        error: null
      };
    case fromGenerarPartes.GUARDAR_PARTES_FAIL:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };
    default:
      return state;

    };
}
