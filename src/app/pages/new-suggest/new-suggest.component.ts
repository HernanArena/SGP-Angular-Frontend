import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-suggest',
  templateUrl: './new-suggest.component.html',
  styleUrls: ['./new-suggest.component.css']
})
export class NewSuggestComponent implements OnInit {

  valor:number = 0;
  step:number = 2;
  disabled:boolean = false;
  sig:boolean = false;
  contactoValid:boolean = false;
  versionValid:boolean = false;
  moduloValid:boolean = false;
  comentarioValid:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }
  siguienteStep(){
    this.sig = false;
    if(this.valor < 3 && this.valor >= 0){
      switch(this.valor){
        case 0: if(this.contactoValid){
                    this.sig = true;
                    this.valor = this.valor + 1;
                  }
          break;
        case 1: if(this.versionValid && this.moduloValid){
                  this.sig = true;
                  this.valor = this.valor + 1;
                      this.sig = false;
                }
          break
        case 2: if(this.comentarioValid)  this.sig = true;
          break;
      }
          console.log(this.valor)
    }
  }
  anteriorStep(){
    if(this.valor <= 3 && this.valor>0){
      this.valor = this.valor - 1;
    }
  }
  enviar(){
    this.valor = this.valor + 1;
  }


}
