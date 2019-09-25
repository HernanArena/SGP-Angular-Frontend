import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LimpiarUsuario } from 'src/app/store/actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';
import { NewManualService } from 'src/app/services/new-manual/new-manual.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public mostrar:boolean = false;
  public novedadesGenerales = [];

  constructor(private store:Store<AppState>,
              private router:Router,
              public _us:AuthService,
              public _nd: NewManualService) {

  }
  ngOnInit() {
  }
  public getNovedadesGeneral(){
    this._nd.getNovedadesGeneral().subscribe( (data)=>{
      this.novedadesGenerales = data;
    });
  }
  mostrarOcultar(){
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
  }
  Logout(){
    this.store.dispatch(new LimpiarUsuario());
    this._us.logout();
    this.router.navigate(['/login']);
  }

}
