import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensions'
})
export class ExtensionsPipe implements PipeTransform {

  transform(value: string, soloExtension:boolean): string {
    let valor = ""
    if(soloExtension == true){
      let inicio = value.indexOf(".")+1;
      let fin = value.length;
      valor = value.substring(inicio,fin);

    }else if(soloExtension == false){
      let inicio = 0;
      let fin = value.indexOf(".")-1;
      valor = value.substring(inicio,fin);
    }

    return valor;
  }

}
