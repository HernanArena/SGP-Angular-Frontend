import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivarLoadingAction,
         DesactivarLoadingAction,
         CargarUsuario,
         LimpiarPartesAction,
         LimpiarUsuario,
         LimpiarFilterAction } from 'src/app/store/actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subscription:Subscription = new Subscription();
  usuario:Usuario;
  urlAPI = URL_SERVICES;
  token:string;

  constructor(private http:HttpClient,
              public store:Store<AppState>,
              private router:Router) {
    this.cargarStorage();
  }

  login(uid:string,pwd:string){
    this.store.dispatch(new ActivarLoadingAction());
    const headers = new HttpHeaders({
           'uid':`${uid}`,
           'pwd':`${pwd}`
         });
      return this.http.get(`${this.urlAPI}/login`,{headers})
           .toPromise()
           .then((usuario:Usuario)=>{
             if(usuario.error){
               console.log(usuario);
             }else{
               this.store.dispatch(new CargarUsuario(usuario));
               if(usuario.token){
                 // this.guardarStorage(usuario.token,usuario);

                 this.store.dispatch(new DesactivarLoadingAction());
                 this.router.navigate(['/']);
               }
             }
           });
  }

  guardarStorage(token:string,usuario:Usuario){
    localStorage.setItem('token',token);
    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }
  renuevaToken(){
    let url = URL_SERVICES + '/login/renuevatoken';
    url+='?token='+this.usuario.token;
    return this.http.get(url)
      .pipe(map( (resp:any) => {
        this.usuario.token = resp.token
          localStorage.setItem('token',this.usuario.token);
          return true;
      }),
    catchError( err=>{
      this.router.navigate(['/login']);
      return throwError(err);
    }))
  }
  logout(){
    this.usuario = null;
    this.store.dispatch(new LimpiarPartesAction());
    this.store.dispatch(new LimpiarUsuario());
    this.store.dispatch(new LimpiarFilterAction());
  }
  estaLogueado(){
    return this.usuario.token.length>0;
  }
  cargarStorage(){
    let token = localStorage.getItem('token')
    if(token){
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.usuario = null;
    }
  }
  actualizarUsuario(usuario:any){
    let url = URL_SERVICES +'/usuario/'+usuario._id;
    url+='?token='+this.usuario.token;
    return this.http.put(url, usuario)
      .pipe(map((resp:any)=>{
        if(usuario.username === this.usuario.username){
          let usuarioDB:Usuario = resp.usuario;
          this.guardarStorage(this.token,usuarioDB);
        }
        return true;
      }));
  }
}
