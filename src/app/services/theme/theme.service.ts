import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private ajustes: any = {
    url: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }
  public getAjustes(){
    return this.ajustes;
  }
  public setAjustes(url:string,tema:string){
    this.ajustes.url = url;
    this.ajustes.tema = tema;
  }
  public guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  public cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }
  }
  public aplicarTema(tema:any){
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href',url) ;
    this.ajustes.url = url;
    this.ajustes.tema = tema;
    this.guardarAjustes();
  }

}
