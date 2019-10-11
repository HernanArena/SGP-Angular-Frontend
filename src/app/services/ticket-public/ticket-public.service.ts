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
      console.log("---POST PARTE-----")
      return this.http.post(`${this.urlAPI}/partepublico/errorcontrolado`,partepublico)
        .pipe(map((resp:any) => resp.payload))
    }else{
      return this.http.post(`${this.urlAPI}/upload/partepublico`,partepublico)
        .pipe(map((resp:any) => resp.payload))
    }
  };
  public postArchivoParte(tipo:string,codigo:string,archivo:any):Observable<any>{
    if(tipo === "Error"){
      console.log("---POST ARCHIVO-----")
      console.log(archivo);

      const formData = new FormData()
      for(let i = 0;i<archivo.length;i++){
        formData.append('item'+ i.toString(),archivo[i].file,archivo[i].name);
      }

      console.log(archivo.USR_SPTERH_CODIGO);
      console.log(tipo);
      return this.http.post(`${this.urlAPI}/upload/errorcontrolado/${codigo}`,formData)
      .pipe(map((resp:any) => resp.payload))
    }
    // else{
    //   return this.http.post(`${this.urlAPI}/upload/partepublico/${codigo}`,formData,{
    //     reportProgress:true,
    //     observe:"events"
    //   }).pipe(map((resp:any) => resp.payload))
    // }
  }

}
