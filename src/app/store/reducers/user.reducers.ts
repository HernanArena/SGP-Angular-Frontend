import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuario from '../actions/user.actions';

export interface UsuarioState{
  user: Usuario;
  // loaded: boolean;
  // loading: boolean;
  error: any;
}

const estadoInicial:UsuarioState =  {
  user: null,
  // loaded: false,
  // loading: false,
  error: null
};

export function usuarioReducer(state = estadoInicial, action: fromUsuario.usuarioAcciones):UsuarioState{
  switch(action.type){
    case fromUsuario.CARGAR_USUARIO:
      return {
        ...state,
        // loaded:true,
        // loading: false,
        error:null,
        user:{...action.usuario}
      };
    // case fromUsuario.CARGAR_USUARIO_SUCCESS:
    //   return {
    //     ...state,
    //     loaded:true,
    //     loading:false,
    //     error: null,
    //     user:{...action.usuario}
    //   };
    // case fromUsuario.CARGAR_USUARIO_FAIL:
    //   return {
    //     ...state,
    //     loaded: false,
    //     loading: false,
    //     error: {
    //       status: action.payload.status,
    //       message: action.payload.message,
    //       url: action.payload.url
      //   }
      // };
      case fromUsuario.LIMPIAR_USUARIO:
        return {
          user: null,
          // loaded: false,
          // loading: false,
          error: null
        };
    default:
      return state;
  }
}
