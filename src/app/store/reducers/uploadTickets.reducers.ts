import * as fromGenerarPartes from '../actions/uploadTickets.actions';
import { Parte } from 'src/app/models/parte.model';
import { Contacto } from 'src/app/models/contacto.model';

export interface GenerarPartesState{
  parte:Parte,
  contacto:Contacto,
  descripcion:string,
  adjunto:string,
  loading:boolean,
  loaded:boolean,
  error:any
}

const estadoInicial:GenerarPartesState =  {
  parte: null,
  contacto: null,
  descripcion: null,
  adjunto: null,
  loading: false,
  loaded: true,
  error: null
};

export function generarParteReducer(state = estadoInicial, action: fromGenerarPartes.generadorParteAcciones):GenerarPartesState{
  switch(action.type){
    case fromGenerarPartes.GUARDAR_PARTES:
      return {
        ...state,
        loaded:false,
        loading: true,
        error:null
        };
    case fromGenerarPartes.GUARDAR_PARTES_SUCCESS:
      return {
        ...state,
        loaded:true,
        loading:false,
        parte: action.parte,
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
    case fromGenerarPartes.AGREGAR_DESCRIPCION:
      return {
        ...state,
        loaded: true,
        loading: false,
        adjunto: action.descripcion,
        error: null
      };
    case fromGenerarPartes.AGREGAR_CONTACTO:
      return {
        ...state,
        loaded:true,
        loading:false,
        contacto: {
          id: action.contacto.id,
          nombre: action.contacto.nombre,
          mail: action.contacto.mail
        },
        error: null
      };
    case fromGenerarPartes.AGREGAR_ADJUNTO:
      return {
        ...state,
        loaded: true,
        loading: false,
        adjunto: action.adjunto,
        error: null
      };  
    default:
      return state;
    };
}
