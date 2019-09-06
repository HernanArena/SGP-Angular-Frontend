import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selected'
})
export class SelectedPipe implements PipeTransform {

  transform(value: any, separador: string): any {
    return value.codigo.toString().concat(separador).concat(value.descripcion.toString());
  }

}
