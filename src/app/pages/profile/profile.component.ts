import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }
  cambiarColor(tema:string){
    console.log(tema);
    let url = `assets/css/colors/${tema}.css`
    console.log(url);
    this._document.getElementById('tema').setAttribute('href',url) ;
  }

}
