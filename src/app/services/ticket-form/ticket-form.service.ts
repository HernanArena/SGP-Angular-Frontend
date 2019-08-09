import { Injectable } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICESTEST } from 'src/app/config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketFormService {

  constructor(public http:HttpClient,public _sp:SearchService) { }
  urlAPI = URL_SERVICESTEST;

  getContacto(valor:string):Observable<any>{
    return this.http.get(`${this.urlAPI}/contacto`)
      .pipe(map((resp:any) =>console.log(resp)))
    // let resultados=null;
    // let regex = new RegExp(valor,'i');
    //
    // resultados = this.modulos.filter( data => regex.test(data.descripcion) || regex.test(data.codigo) )
    //
    // return new Observable(res =>{
    //   res.next(resultados);
    // });
  }
  getmodulo(value:string){
    this._sp.getmodulos(value);
  }
  getObejto(value:string){
    this._sp.getObjetosConFiltro(value);
  }

}
