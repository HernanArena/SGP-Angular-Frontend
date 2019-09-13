import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LimpiarUsuario } from 'src/app/store/actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostar:boolean = false;

  constructor(private store:Store<AppState>,
              private router:Router,
              public _us:AuthService) {


  }
  ngOnInit() {
  }
  mostrarOcultar(){
    this.mostar = !this.mostar;
    console.log(this.mostar);
  }
  Logout(){
    this.store.dispatch(new LimpiarUsuario());
    this._us.logout();
    this.router.navigate(['/login']);
  }

}
