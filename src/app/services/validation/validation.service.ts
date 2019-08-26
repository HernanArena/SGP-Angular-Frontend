import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  _validations:any[]= [];

  constructor() { }

  addValidation(validations:any, minLength?:any){
    for(let validators of validations){
      switch(validators.validation){
        case "required":
            this._validations.push({nombre:validators.nombre,validation:Validators.required});
          break;
        case "minLength":
          this._validations.push({nombre:validators.nombre,validation:Validators.minLength(minLength)});
          break;
        case "email":
          this._validations.push({nombre:validators.nombre,validation:Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")});
          break;

      }

    }
    return this._validations;
  }



}
