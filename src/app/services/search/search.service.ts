import { Injectable } from '@angular/core';
import { Parte } from 'src/app/models/parte.model';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AgregarFilterVersionAction, AgregarFilterObjetoAction } from 'src/app/store/actions';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICESTEST} from '../../config/config';
import { map, filter } from 'rxjs/operators';
import { Router, ActivationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private partes:Parte[] =[];
  private urlAPI = URL_SERVICESTEST;
  constructor(public http:HttpClient,
              public store:Store<AppState>,
              public router:Router) { }

  public getPartesConFiltro(termino:string,
                            offset:number,
                            limit:number):Observable<any>{
    let modulo:string;
    let version:number;
    let objeto:string;

    this.store.select('filtro').subscribe( data =>{
      modulo = data.filtro.modulo;
      version = data.filtro.version;
      objeto = data.filtro.objeto;
    })

    termino = (termino == '' ? 'null':termino)
    modulo = (modulo == '' || !modulo ? 'null':modulo)
    objeto = (objeto == '' || !objeto ? 'null':objeto)

    return this.http.get(`${this.urlAPI}/partepublico/P/${modulo}/${objeto}/${version}/${termino}/${offset}/${limit}`)
      .pipe(map((resp:any) => resp.payload))
  };
  public getDataRoute(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild ==null),
      map((evento:ActivationEnd) => evento.snapshot.data)
    )
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
