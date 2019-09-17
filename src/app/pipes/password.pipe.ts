import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar:boolean = true ): string {
    let nombre:string = "";

    if(activar){
      for(let i = 0 ; i<value.length; i++){
        nombre=nombre+"*";
      }
    }else{
      nombre =value;
    }
    return nombre;
  }

}
