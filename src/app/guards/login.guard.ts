import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad  {
  tokenOK:boolean = false;
  constructor(public store:Store<AppState>,
              public _router:Router){
    this.store.select('usuario')
           .subscribe((usuario)=>{
             if(usuario.user) this.tokenOK = true;
           });
    }
  canLoad(): boolean {
    if(this.tokenOK) return this.tokenOK;
    this._router.navigate(['/login']);
  }

  canActivate(): boolean {
    if(this.tokenOK) return this.tokenOK;
    this._router.navigate(['/login']);
  }
}
