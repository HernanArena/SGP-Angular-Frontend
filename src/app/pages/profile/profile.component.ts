import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public valorRazonSocial:string = "sac";
  public contrasena:string = "gsa1!";
  public usuario:string = "sac";
  public activar = true;

  constructor(public _ajustes: ThemeService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema:string, link:any){
    let selectores:any = document.getElementsByClassName('selector');
    for ( let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
    this._ajustes.aplicarTema(tema);
  }
  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');

    let tema = this._ajustes.getAjustes().tema;

    for ( let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}
