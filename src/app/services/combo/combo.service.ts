import { Injectable } from '@angular/core';
import { URL_SERVICESTEST } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Filtro } from 'src/app/models/filtro.model';
import { CargarFilterAction, AgregarFilterVersionAction, AgregarFilterObjetoAction, AgregarFilterModuloAction, AgregarFilterContactoAction } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class ComboService {
  private urlAPI = URL_SERVICESTEST;

  constructor(public http:HttpClient,
              public store:Store<AppState>) { }

  public getVersiones(termino:any):Observable<any>{
    if(termino){
      if(termino.codigo.includes("-")){
        termino.codigo = termino.codigo.split("-").slice(0,termino.codigo.split("-").length-1).join("-").trim();
      }
      return this.http.get(`${this.urlAPI}/version/${termino.codigo}`)
        .pipe(map((resp:any) => resp.payload));
    }else{
      return this.http.get(`${this.urlAPI}/version`)
        .pipe(map((resp:any) => resp.payload));
    }
  }
  public getModulos(termino:any):Observable<any>{
    if(termino){
       if(termino.codigo.includes("-")){
         termino.codigo = termino.codigo.split("-").slice(0,termino.codigo.split("-").length-1).join("-").trim();
       }
       return this.http.get(`${this.urlAPI}/modulo/${termino.codigo}`)
                  .pipe(map((resp:any) => resp.payload));
    }else{
      return this.http.get(`${this.urlAPI}/modulo`)
        .pipe(map((resp:any) => resp.payload));
    }
  }
  public getObjetos(modulo:any,termino:any):Observable<any> {
    if(modulo && modulo.codigo.includes("-")){
      modulo.codigo = modulo.codigo.split("-").slice(0,modulo.codigo.split("-").length-1).join("-").trim();
    }
    termino = (termino && termino.codigo != "")?termino.codigo:null;
    modulo = (modulo && modulo.codigo != "")?modulo.codigo:null;

    return this.http.get(`${this.urlAPI}/objeto/${modulo}/${termino}/`)
    .pipe(map((resp:any) => resp.payload));
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
  getContacto(nrocta:string,termino:string):Observable<any>{
    if(termino){
      return this.http.get(`${this.urlAPI}/contacto/${nrocta}/${termino}`)
        .pipe(map((resp:any) => {return resp.payload;}))
    }else{
      return this.http.get(`${this.urlAPI}/contacto/${nrocta}`)
        .pipe(map((resp:any) => {return resp.payload;}))
    }
  }
  public cargarFiltrosStore(filtros:Filtro){
    this.store.dispatch(new CargarFilterAction(filtros));
  }

  public AgregarVersionStore(version:string){
    this.store.dispatch(new AgregarFilterVersionAction(version));
  }

  public AgregarObjetoStore(modulo:string,objeto:string){
    this.store.dispatch(new AgregarFilterObjetoAction(modulo,objeto));
  }
  public AgregarModuloStore(modulo:string){
    this.store.dispatch(new AgregarFilterModuloAction(modulo));
  }
  public AgregarContactoStore(contacto:string){
    this.store.dispatch(new AgregarFilterContactoAction(contacto));
  }

}
