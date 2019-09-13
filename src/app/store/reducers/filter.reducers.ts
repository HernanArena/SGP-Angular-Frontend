
import * as fromFilterActions from '../actions/filter.actions';
import { Filtro } from 'src/app/models/filtro.model';

export interface filterState {
  filtro: Filtro;
};

const initState: filterState = {
  filtro:null
};

export function filterReducers (state:filterState = initState,action: fromFilterActions.filterAcciones):filterState{
  switch(action.type){
    case fromFilterActions.CARGAR_FILTER:
      return {
        filtro: {...action.filtro}
      };
    case fromFilterActions.LIMPIAR_FILTER:
      return {
        filtro: null
      };
    case fromFilterActions.AGREGAR_VERSION_FILTER:
      return {
        filtro: {...state.filtro,
          version: action.version
        }
      };
    case fromFilterActions.AGREGAR_MODULO_FILTER:
      return {
        filtro: {...state.filtro,
          modulo: action.modulo
        }
      };
    case fromFilterActions.AGREGAR_OBJETO_FILTER:
      return {
        filtro: {...state.filtro,
          modulo: action.modulo,
          objeto: action.objeto
        }
      };
    case fromFilterActions.AGREGAR_TERMINO_FILTER:
      return {
        filtro: {...state.filtro,
          termino: action.termino
        }
      };
    case fromFilterActions.AGREGAR_CONTACTO_FILTER:
      return {
        filtro: {...state.filtro,
          contacto: action.contacto
        }
      };

    default:
      return state;
  }
}
