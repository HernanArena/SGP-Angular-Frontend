import { Parte } from './parte.model';

export class PartePayload {
  constructor(public partes:Parte[],
              public count:number){}
}
