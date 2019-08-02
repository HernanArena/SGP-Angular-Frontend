
import * as fromUIActions from '../actions/ui.actions';

export interface UIState {
  isLoading: boolean
};

const initState: UIState = {
  isLoading: false
};

export function uiReducers (state:UIState = initState,action: fromUIActions.loadingAcciones):UIState{
  switch(action.type){
    case fromUIActions.ACTIVAR_LOADING:
      return {
        isLoading: true
      };
    case fromUIActions.DESACTIVAR_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
