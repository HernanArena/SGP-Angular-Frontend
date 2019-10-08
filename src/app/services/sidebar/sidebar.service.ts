
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // menu:any[] = [];
  constructor(public _us:AuthService) {
  }

  // cargarMenu(){
  //   this.menu = this._us.menu;
  // }
  menu:any = [
        {
          titulo:'Panel',
          icono: 'mdi mdi-gauge',
          url:'/panel'
        },
        {
          titulo:'Escritorio',
          icono:'mdi mdi-folder-lock-open',
          url:'/escritorio'
        },
        {
          titulo:'Licencias',
          icono:'mdi mdi-key-plus',
          url:'/licencias'
        },
        {
          titulo:'Documentos',
          icono:'mdi mdi-file-document',
          sideMenu:[
            {
              titulo:'Crear',
              icono:'fa fa-edit',
              url:'/crear',
            },
            {
              titulo:'Borrar',
              icono:'fa fa-trash',
              url:'/borrar',
            },
            {
              titulo:'Modificar',
              icono:'fa fa-refresh',
              url:'/modificar',
            }

          ]
        },
        {
          titulo:'Salir',
          icono:'mdi mdi-logout',
          url:'/salir'
        }


   ];
}
