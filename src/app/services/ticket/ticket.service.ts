import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarFilterAction, AgregarFilterVersionAction, AgregarFilterObjetoAction, LimpiarPartesAction } from 'src/app/store/actions';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICESTEST} from '../../config/config';
import { map, filter } from 'rxjs/operators';
import { Router, ActivationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private urlAPI = URL_SERVICESTEST;
  private modulo:any;
  private objeto:any;
  private version:any;
  private contacto:any;
  private username:any;

  constructor(public http:HttpClient,
              public store:Store<AppState>,
              public router:Router) { }

  public getPartesConFiltro(termino:any,
                            offset:number,
                            limit:number):Observable<any>{
    this.recuperaFiltro();
    termino = (termino && termino.codigo == '') || !termino ? 'null':termino.codigo
    console.log(termino)
    console.log(this.version)
    this.modulo = (this.modulo && this.modulo.codigo == '') || !this.modulo ? 'null':this.modulo.codigo
    this.objeto = (this.objeto && this.objeto.codigo == '') || !this.objeto ? 'null':this.objeto.codigo
    this.version = (this.version && this.version.codigo == '') || !this.version ? 'null':this.version.codigo
    console.log(this.version)

    console.log(`${this.urlAPI}/partepublico/P/${this.modulo}/${this.objeto}/${this.version}/${termino}/${offset}/${limit}`)
    return this.http.get(`${this.urlAPI}/partepublico/P/${this.modulo}/${this.objeto}/${this.version}/${termino}/${offset}/${limit}`)
      .pipe(map((resp:any) => resp.payload))
  };

  public postNuevoParte(descripcion:string,
                        adjunto:string):Observable<any>{
    this.recuperaFiltro();
    this.recuperaUser();
    this.modulo = (this.modulo && this.modulo.codigo == '') || !this.modulo ? 'null':this.modulo.codigo
    this.objeto = (this.objeto && this.objeto.codigo == '') || !this.objeto ? 'null':this.objeto.codigo
    this.version = (this.version && this.version.codigo == '') || !this.version ? 'null':this.version.codigo

    let parte:any = {
       nrocta: this.username,
       versio: this.version,
       userid: this.contacto.descripcion,
       descrp: descripcion,
       adjunt: adjunto
    };

    return this.http.post(`${this.urlAPI}/parte`,parte)
      .pipe(map((resp:any) => resp.payload))
  };


  cargarFiltrosStore(filtros:any){
    this.store.dispatch(new CargarFilterAction(filtros));
  }

  limpiarPartes(){
    this.store.dispatch(new LimpiarPartesAction());
  }

  AgregarVersionStore(version:number){
    this.store.dispatch(new AgregarFilterVersionAction(version));
  };

  public getDataRoute(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild ==null),
      map((evento:ActivationEnd) => evento.snapshot.data)
    )
  }
  //Funciones auxiliares
  private recuperaFiltro(){
    this.store.select('filtro').subscribe( data =>{
      this.modulo = data.filtro.modulo;
      this.version = data.filtro.version;
      this.objeto = data.filtro.objeto;
      this.contacto = data.filtro.contacto;
    });
  }
  private recuperaUser(){
    this.store.select('usuario').subscribe( data =>{
      this.username = data.user.username;
    });
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
