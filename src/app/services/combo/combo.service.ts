import { Injectable } from '@angular/core';
import { URL_SERVICESTEST } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Combo } from 'src/app/models/combo.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Filtro } from 'src/app/models/filtro.model';
import { CargarFilterAction, AgregarFilterVersionAction, AgregarFilterObjetoAction } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class ComboService {
  private urlAPI = URL_SERVICESTEST;
  private versiones:Combo[] = [];
  private modulos:Combo[] = [];
  private objetos:Combo[] = [];
  private errores:Combo[] = [];
  constructor(public http:HttpClient,
              public store:Store<AppState>) { }

  public getVersiones(termino:string):Observable<any>{
    if(termino){
      return this.http.get(`${this.urlAPI}/version/${termino}`)
        .pipe(map((resp:any) => resp.payload));
    }else{
      return this.http.get(`${this.urlAPI}/version`)
        .pipe(map((resp:any) => resp.payload));
    }
  }
  public getModulos(termino:string):Observable<any>{
    if(termino){
       return this.http.get(`${this.urlAPI}/modulo/${termino}`)
                  .pipe(map((resp:any) => resp.payload));
    }else{
      return this.http.get(`${this.urlAPI}/modulo`)
        .pipe(map((resp:any) => resp.payload));
    }
  }
  public getObjetos(modulo:string,termino:string):Observable<any> {
    if(termino){
      return this.http.get(`${this.urlAPI}/objeto/${modulo}/${termino}/`)
      .pipe(map((resp:any) => resp.payload));
    }else{
      console.log(`${this.urlAPI}/objeto/${modulo}`)
      return this.http.get(`${this.urlAPI}/objeto/${modulo}`)
        .pipe(map((resp:any) => resp.payload));
    }
  }
  public getCodigoError(error:string):Observable<any>{
    if(error){
      return this.http.get(`${this.urlAPI}/partepublico/e/${error}/`)
      .pipe(map((resp:any) => resp.payload));
    }else{
      return this.http.get(`${this.urlAPI}/partepublico/e`)
        .pipe(map((resp:any) => resp.payload));
    }
  }
  public cargarFiltrosStore(filtros:Filtro){
    this.store.dispatch(new CargarFilterAction(filtros));
  }

  public AgregarVersionStore(version:number){
    this.store.dispatch(new AgregarFilterVersionAction(version));
  }

  public AgregarObjetoStore(modulo:string,objeto:string){
    this.store.dispatch(new AgregarFilterObjetoAction(modulo,objeto));
  }

}