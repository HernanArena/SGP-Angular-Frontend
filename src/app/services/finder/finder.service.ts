import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AgregarFilterTerminoAction} from 'src/app/store/actions';
import { SearchService } from '../search/search.service';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  datosbusqueda:any;

  constructor(public store:Store<AppState>,
              public _searchservice:SearchService){
  }
  guardarTerminoStore(termino:string){
    this.store.dispatch(new AgregarFilterTerminoAction(termino));
  }
  recuperarPartes(termino:string, offset:number ,limit:number){
    return this._searchservice.getPartesConFiltro(termino, offset, limit);
  }
}
