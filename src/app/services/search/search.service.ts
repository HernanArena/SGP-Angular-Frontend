import { Injectable } from '@angular/core';
import { Parte } from 'src/app/models/parte.model';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AgregarFilterVersionAction, AgregarFilterObjetoAction } from 'src/app/store/actions';
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

  getPartesConFiltro(termino:string, offset:number ,limit:number):Observable<any>{

    let modulo:string;
    let version:number;
    let objeto:string;

    this.store.select('filtro').subscribe( data =>{
      modulo = data.filtro.modulo;
      version = data.filtro.version;
      objeto = data.filtro.objeto;
    })

    termino= (termino==''?'null':termino)
    modulo= (modulo=='' || !modulo ?'null':modulo)
    objeto= (objeto=='' || !objeto ?'null':objeto)

    return this.http.get(`${this.urlAPI}/partepublico/P/${modulo}/${objeto}/${version}/${termino}/${offset}/${limit}`)
      .pipe(map((resp:any) => resp.payload))
  };


}
interface modulo{
  codigo:string,
  descripcion:string
}

interface objeto{
  codigo:string,
  descripcion:string
}
