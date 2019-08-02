import { Injectable } from '@angular/core';
import { Parte } from 'src/app/models/parte.model';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Filtro } from 'src/app/models/filtro.model';
import { CargarFilterAction, AgregarFilterVersionAction, AgregarFilterObjetoAction } from 'src/app/store/actions';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICESTEST} from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  partes:Parte[] =[
    {
      codigo: "KT",
      numero: 123,
      modulo: "FC",
      objeto: "FCRMVH",
      version: 430,
      fecha_de_liberacion: "2019-03-01",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "HA",
      numero: 126,
      modulo: "AG",
      objeto: "AG_PEN_COS",
      version: 410,
      fecha_de_liberacion: "2019-06-14",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, HERNY dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "HA",
      numero: 140,
      modulo: "AG",
      objeto: "AG_PEN_COS",
      version: 410,
      fecha_de_liberacion: "2019-06-20",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, HERNY dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "HA",
      numero: 200,
      modulo: "AG",
      objeto: "AG_PEN_COS",
      version: 410,
      fecha_de_liberacion: "2020-06-14",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, HERNY dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "HA",
      numero: 250,
      modulo: "AG",
      objeto: "AG_PEN_COS",
      version: 410,
      fecha_de_liberacion: "2019-08-14",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, HERNY dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "HA",
      numero: 590,
      modulo: "AG",
      objeto: "AG_PEN_COS",
      version: 410,
      fecha_de_liberacion: "2019-02-20",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, HERNY dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "HA",
      numero: 1790,
      modulo: "AG",
      objeto: "AG_PEN_COS",
      version: 410,
      fecha_de_liberacion: "2019-12-20",
      descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, HERNY dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      codigo: "AH",
      numero: 132,
      modulo: "VT",
      objeto: "VTMCLH",
      version: 370,
      fecha_de_liberacion: "2018-05-21",
      descripcion:`Registración de Notas (EDRNVH)
                    Problema
                    Cuando se utiliza el campo EDTTCH_PROMED en "Comun" y el campo EDTEVI_CNDDCM en 0,5 al registrar las notas el sistema no calcula el Promedio y lo deja en 0.`
    },
    {
      codigo: "GR",
      numero: 1141,
      modulo: "CO",
      objeto: "COTCIH",
      version: 410,
      fecha_de_liberacion: "2016-02-7",
      descripcion:`De: Claudio Trosch - Intercap S.R.L.
                    Fecha: 20 de febrero de 2014, 9:14
                    Asunto: Soporte magnético - Retenciones IVA
                    Para: Soporte Softland
                    Cc: Sandra Saucedo

                    Buen día. Existe un problema con el proceso soporte magnético de retenciones de iva y el reporte para exportar el txt.
                    Al correr el proceso, se debe indicar el rango de fechas a procesar, pero cuando se ejecuta el reporte (DGB_IVA_RPR ) trae cualquier dato de otras fechas. Además el reporte en cuestión tampoco tiene el filtro de las fechas.
                    Otro problema con el reporte es que no trae la cuit para las retenciones que vienen de los recibos, lo cual implica que tengamos que buscar manualmente uno por uno a ver a que cuit pertenece.
                    Necesito por favor solucionar el problema hoy a mas tardar mañana.
                    Gracias `
    }
  ];
  modulos:modulo[] =[];
  objetos:objeto[] =[];
  urlAPI = URL_SERVICESTEST;
  constructor(public http:HttpClient,public store:Store<AppState>) { }

  getmodulos(termino:string):Observable<any>{

    return this.http.get(`${this.urlAPI}/modulo/${termino}`)
      .pipe(map((resp:any) => resp.payload))


    // let resultados=null;
    // let regex = new RegExp(valor,'i');
    //
    // resultados = this.modulos.filter( data => regex.test(data.descripcion) || regex.test(data.codigo) )
    //
    // return new Observable(res =>{
    //   res.next(resultados);
    // });
  }


  getObjetosConFiltro(modulo:string,termino:string):Observable<any> {
    return this.http.get(`${this.urlAPI}/objeto/${modulo}/${termino}/`)
    .pipe(map((resp:any) => resp.payload))


    // let resultados=null;
    // let regex = new RegExp(valor,'i');
    // resultados = this.objetos.filter( data => regex.test(data.descripcion) || regex.test(data.codigo) || regex.test(data.modulo));
    // return new Observable(res =>{
    //   res.next(resultados);
    // });
  }

  getPartesConFiltro(termino:string):Observable<any>{
    let resultados:any[];
    let modulo:string;
    let version:number;
    let objeto:string;
    let regex = new RegExp(termino,'i');

    this.store.select('filtro').subscribe( data =>{
      modulo = data.filtro.modulo;
      version = data.filtro.version;
      objeto = data.filtro.objeto;
    })

    resultados = this.partes.filter(data=> data.modulo == modulo && data.version == version && data.objeto == objeto);
    console.log(resultados);
    if(termino){
      resultados = resultados.filter(data=> regex.test(data.descripcion));
    }
    return new Observable(res =>{
      res.next(resultados);
    });;
  };

  cargarFiltrosStore(filtros:Filtro){
    this.store.dispatch(new CargarFilterAction(filtros));
  }

  AgregarVersionStore(version:number){
    this.store.dispatch(new AgregarFilterVersionAction(version));
  }

  AgregarObjetoStore(modulo:string,objeto:string){
    this.store.dispatch(new AgregarFilterObjetoAction(modulo,objeto));
  }

}
interface modulo{
  codigo:string,
  descripcion:string
}

interface objeto{
  codigo:string,
  descripcion:string
}
