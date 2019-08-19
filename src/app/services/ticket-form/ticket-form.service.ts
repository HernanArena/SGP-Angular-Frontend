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

  getContacto(nrocta:string,termino:string):Observable<any>{
    if(termino){
      return this.http.get(`${this.urlAPI}/contacto/${nrocta}/${termino}`)
        .pipe(map((resp:any) => {return resp.payload;}))
    }else{
      return this.http.get(`${this.urlAPI}/contacto/${nrocta}`)
        .pipe(map((resp:any) => {return resp.payload;}))
    }
  }
  getmodulo(value:string){
    this._sp.getmodulos(value);
  }
  // getObejto(value:string){
  //   this._sp.getObjetosConFiltro(value);
  // }

}
