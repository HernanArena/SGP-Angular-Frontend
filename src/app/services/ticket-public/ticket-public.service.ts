import { Injectable } from '@angular/core';
import {URL_SERVICESTEST} from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketPublicService {
  private urlAPI = URL_SERVICESTEST;

  constructor(public http:HttpClient,
              public router:Router) { }

  public postNuevoParte(tipo:string,
                        partepublico:any):Observable<any>{
    if(tipo === "Error"){
      return this.http.post(`${this.urlAPI}/upload/errorcontrolado/1`,partepublico)
        .pipe(map((resp:any) => resp.payload))
    }else{
      return this.http.post(`${this.urlAPI}/upload/partepublico`,partepublico)
        .pipe(map((resp:any) => resp.payload))
    }
  };

}
