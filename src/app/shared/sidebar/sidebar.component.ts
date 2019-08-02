import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromUsuario from 'src/app/store/reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario:Usuario;

  constructor(private store:Store<AppState>,
              public _sidebar:SidebarService,
             public _us:UsuarioService) { }

  ngOnInit() {
    this.store.select('usuario').subscribe((data:fromUsuario.UsuarioState)=>{
      this.usuario = data.user;
     });
    // this.usuario = this._us.usuario;
     // this._sidebar.cargarMenu();
     this._sidebar.menu;
  }

}
