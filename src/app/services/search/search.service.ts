import { Injectable } from '@angular/core';
import { Parte } from 'src/app/models/parte.model';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Filtro } from 'src/app/models/filtro.model';
import { CargarFilterAction, AgregarFilterVersionAction, AgregarFilterObjetoAction } from 'src/app/store/actions';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICESTEST} from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  partes:Parte[] =[];
  modulos:modulo[] =[];
  objetos:objeto[] =[];
  urlAPI = URL_SERVICESTEST;
  constructor(public http:HttpClient,public store:Store<AppState>) { }


  getVersiones(termino:string):Observable<any>{
    if(termino){
      return this.http.get(`${this.urlAPI}/version/${termino}`)
        .pipe(map((resp:any) => resp.payload))
    }else{
      return this.http.get(`${this.urlAPI}/version`)
        .pipe(map((resp:any) => resp.payload))
    }
  }

  getModulos(termino:string):Observable<any>{
    if(termino){
       if(termino.indexOf(" - ") > 0 )termino = termino.split(" - ")[1];
       return this.http.get(`${this.urlAPI}/modulo/${termino}`)
                  .pipe(map((resp:any) => resp.payload));
    }else{
      return this.http.get(`${this.urlAPI}/modulo`)
        .pipe(map((resp:any) => resp.payload));
    }
  }


  getObjetosConFiltro(modulo:string,termino:string):Observable<any> {
    if(termino){
      return this.http.get(`${this.urlAPI}/objeto/${modulo}/${termino}/`)
      .pipe(map((resp:any) => resp.payload))
    }else{
      return this.http.get(`${this.urlAPI}/objeto/${modulo}`)
        .pipe(map((resp:any) => resp.payload));
    }
  }

  getPartesConFiltro(termino:string):Observable<any>{
    let resultados:any[];
    let modulo:string;
    let version:number;
    let objeto:string;
    let regex = new RegExp(termino,'i');

    this.store.select('filtro').subscribe( data =>{
      modulo = data.filtro.modulo;
      version = data.filtro.version;
      objeto = data.filtro.objeto;
    })

    // resultados = this.partes.filter(data=> data.modulo == modulo && data.version == version && data.objeto == objeto);
    resultados = this.partes
    console.log(resultados);
    if(termino){
      resultados = resultados.filter(data=> regex.test(data.descripcion));
    }
    return new Observable(res =>{
      res.next(resultados);
    });;
  };

  cargarFiltrosStore(filtros:Filtro){
    this.store.dispatch(new CargarFilterAction(filtros));
  }

  AgregarVersionStore(version:number){
    this.store.dispatch(new AgregarFilterVersionAction(version));
  }

  AgregarObjetoStore(modulo:string,objeto:string){
    this.store.dispatch(new AgregarFilterObjetoAction(modulo,objeto));
  }

}
interface modulo{
  codigo:string,
  descripcion:string
}

interface objeto{
  codigo:string,
  descripcion:string
}
