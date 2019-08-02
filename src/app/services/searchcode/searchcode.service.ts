import { Injectable } from '@angular/core';
import { Codigo } from 'src/app/models/codigo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchcodeService {
  codigo:Codigo[] =[
    {codigo:"CG000130",descripcion:"Imposibla realizar 'Guardar como' de una registración"},
    {codigo:"CG000131",descripcion:"El registro se encuentra definido en los parámetros de contabilidad"},
    {codigo:"CG000132",descripcion:"Existen movimientos que no balancean entre ítems y dimensiones ~1"},
    {codigo:"CJ000029",descripcion:"Movimiento ya transferido a la contabilidad"},
    {codigo:"CJ000030",descripcion:"Existe cheque o ya dado de alta"},
    {codigo:"CJ000031",descripcion:"No existe cheque o ya dado de alta"},
    {codigo:"CO000024",descripcion:"Debe completar los items"},
    {codigo:"CO000025",descripcion:"No hay movimientos"},
    {codigo:"CO000026",descripcion:"Chequear el Campo Selecciona"},
    {codigo:"CP000017",descripcion:"Grabación del Presupuesto Base"},
    {codigo:"CP000018",descripcion:"Grabación de la estructura"},
    {codigo:"CP000019",descripcion:"No hubo movimientos a generar para el Presupuesto Base"},
    {codigo:"CV000066",descripcion:"Día de firma no puede ser mayor a 28"},
    {codigo:"CV000067",descripcion:"Fecha de primera factura debe ser igual a fecha desde de periodo de primera factura"},
    {codigo:"CV000068",descripcion:"No existen conceptos definidos para el comprobante ~1"},
    {codigo:"FC000044",descripcion:"No existen items a actualizar o la cantidad resultante de los mismos es cero"},
    {codigo:"FC000045",descripcion:"La sumatoria de importes ingresados difieren con respecto al total del comprobante"},
    {codigo:"FC000046",descripcion:"No balancea la sumatoria del asiento contable en la moneda expresada"},
    {codigo:"GR000097",descripcion:"Lineas de separación para el contenido de mails"},
    {codigo:"GR000098",descripcion:"Fecha de movimiento fuera del rango habilitado"},
    {codigo:"GR000099",descripcion:"No hay movimientos para autorizar"},
    {codigo:"IN000056",descripcion:"No puede ser superior a la Cantidad de caracteres a informar"},
    {codigo:"IN000057",descripcion:"Debe ingresar alguna equivalencia"},
    {codigo:"IN000058",descripcion:"Debe seleccionar alguna interfase"},
    {codigo:"PV000036",descripcion:"La definición de la empresa no trabaja con autorización"},
    {codigo:"PV000037",descripcion:"No se puede anular comprobantes que no se incluyan en subdiario de pagos"},
    {codigo:"PV000038",descripcion:"El mes ingresado no es válido"},
    {codigo:"SJ000032",descripcion:"Medio de pago no existente en el comprobante"},
    {codigo:"SJ000033",descripcion:"Cuenta corriente incorrecta para código y tipo de concepto"},
    {codigo:"SJ000034",descripcion:"Concepto debe ser otras cuentas"}
];
  constructor() { }

  getCodigoError(valor:string):Observable<any>{
    let resultados=null;
    let regex = new RegExp(valor,'i');

    resultados = this.codigo.filter( data => regex.test(data.descripcion) || regex.test(data.codigo) )

    return new Observable(res =>{
      res.next(resultados);
    });
  }
}
