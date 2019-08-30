import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {URL_SERVICESTEST} from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchcodeService {
  urlAPI = URL_SERVICESTEST;

  constructor(public http:HttpClient,
              public store:Store<AppState>) { }

  getCodigoError(error:string):Observable<any>{
    if(error){
      return this.http.get(`${this.urlAPI}/partepublico/e/${error}/`)
      .pipe(map((resp:any) => resp.payload.partes))
    }else{
      return this.http.get(`${this.urlAPI}/partepublico/e`)
        .pipe(map((resp:any) => resp.payload.partes));
    }
  }
}
