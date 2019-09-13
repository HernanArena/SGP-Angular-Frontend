import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AgregarFilterTerminoAction, CargarPartes} from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  datosbusqueda:any;

  constructor(public store:Store<AppState>){
  }
  guardarTerminoStore(termino:string){
    this.store.dispatch(new AgregarFilterTerminoAction(termino));
  }
  cargarPartesStore(termino:any,offset,limit){
    this.store.dispatch(new CargarPartes(termino,offset,limit));
  }

}
