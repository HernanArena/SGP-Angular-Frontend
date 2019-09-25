import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_SERVICESTEST } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class NewManualService {
  private urlAPI = URL_SERVICESTEST;
  usuario:string;
  constructor(public http:HttpClient,
              public store:Store<AppState>) {
        store.select('usuario').subscribe( (data)=>{
          this.usuario = data.user.empresa.name
        })
  }

  public getNovedadesGeneral():Observable<any>{
      return this.http.get(`${this.urlAPI}/documento/${this.usuario}`)
        .pipe(map((resp:any) => resp.payload));
  }
  public getNovedades():Observable<any>{
    return this.http.get(`${this.urlAPI}/modulo`)
      .pipe(map((resp:any)=> resp.payload));
  }


}
