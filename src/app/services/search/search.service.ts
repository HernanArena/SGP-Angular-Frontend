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
  modulos:modulo[] =[
    {   codigo: "AG", descripcion: "Gestión Agropecuaria"},
    {   codigo: "AU", descripcion: "Autorizaciones"},
    {   codigo: "CB", descripcion: "Conciliación Bancaria"},
    {   codigo: "CF", descripcion: "Cash Flow"},
    {   codigo: "CG", descripcion: "Contabilidad"},
    {   codigo: "CJ", descripcion: "Tesorería"},
    {   codigo: "CO", descripcion: "Compras"},
    {   codigo: "CP", descripcion: "Control Presupuestario"},
    {   codigo: "CT", descripcion: "Costos"},
    {   codigo: "CV", descripcion: "Facturación de Contratos"},
    {   codigo: "DG", descripcion: "Impuestos"},
    {   codigo: "DP", descripcion: "Depuraciones"},
    {   codigo: "DY", descripcion: "Tabla de Migracion con el Sistema America"},
    {   codigo: "EC", descripcion: "E-Commerce"},
    {   codigo: "ED", descripcion: "Gestión Educativa"},
    {   codigo: "EO", descripcion: "Análisis de Gestión Financiera (EOAF)"},
    {   codigo: "FC", descripcion: "Facturación"},
    {   codigo: "GC", descripcion: "Gestión Comercial"},
    {   codigo: "GP", descripcion: "Gestión de Proyectos"},
    {   codigo: "GR", descripcion: "General"},
    {   codigo: "IG", descripcion: "Informes Gerenciales"},
    {   codigo: "IM", descripcion: "Importaciones"},
    {   codigo: "IN", descripcion: "Interfases"},
    {   codigo: "ME", descripcion: "Mantenimiento de Equipos y Vehículos"},
    {   codigo: "PD", descripcion: "Producción"},
    {   codigo: "PM", descripcion: "Administración de Proyectos"},
    {   codigo: "PV", descripcion: "Proveedores"},
    {   codigo: "RH", descripcion: "Recursos Humanos"},
    {   codigo: "RP", descripcion: "Repartos"},
    {   codigo: "RV", descripcion: "Activo Fijo"},
    {   codigo: "SJ", descripcion: "Sueldos y Jornales"},
    {   codigo: "SP", descripcion: "Seguimiento de Proyectos"},
    {   codigo: "ST", descripcion: "Stock"},
    {   codigo: "TR", descripcion: "Transferencias"},
    {   codigo: "VT", descripcion: "Clientes"},
    {   codigo: "WA", descripcion: "Autorización"},
    {   codigo: "WG", descripcion: "Wizard Generator"}
  ];
  objetos:any[] = [
    {   codigo: "ACTSTWIZ", descripcion: "Contabilización de Costos", modulo: "ST"},
    {   codigo: "ADMIN - GRAERH", descripcion: "Entidad Relacional", modulo: "GR"},
    {   codigo: "AE_DEPURACION", descripcion: "AE - Depuración de Compras", modulo: "AE"},
    {   codigo: "AE_DEPURACIONFC", descripcion: "AE - Depuración de Facturación", modulo: "AE"},
    {   codigo: "AG_PEN_ANU_EXE", descripcion: "AG - Pendientes de anulación (Grupo)", modulo: "AE"},
    {   codigo: "AG_PEN_ANU_PAR", descripcion: "AG - Pendientes de anulación (Grupo)", modulo: "AG"},
    {   codigo: "AG_PEN_COS", descripcion: "AG - Pendientes de cosecha", modulo: "AG"},
    {   codigo: "AG_PEN_DET", descripcion: "AG - Pendientes de siembra (Detalle)", modulo: "AG"},
    {   codigo: "AG_PEN_GEN", descripcion: "AG - Pendientes de generación de consumos", modulo: "AG"},
    {   codigo: "AG_PEN_GRP", descripcion: "AG - Pendientes de siembra (Grupo)", modulo: "AE"},
    {   codigo: "AG_PEN_INF", descripcion: "AG - Pendientes para informes de servicio de compras (Sin req. en AG)", modulo: "AG"},
    {   codigo: "AG_PEN_INF_FOR", descripcion: "AG - Pendientes para informes de servicio de compras (Con req. en AG)", modulo: "AG"},
    {   codigo: "AG_PEN_ORD_DET", descripcion: "AG - Pendientes de simulación (Detalle)", modulo: "AG"},
    {   codigo: "AG_PEN_ORD_GRP", descripcion: "AG - Planes de siembra (Grupo)", modulo: "AG"},
    {   codigo: "AG_PEN_REQ", descripcion: "AG - Pendientes para requerimientos de compras", modulo: "AG"},
    {   codigo: "AG_PEN_SIE_DET", descripcion: "AG - Pendientes de siembra (Detalle)", modulo: "AG"},
    {   codigo: "AG_PEN_SIE_GRP", descripcion: "AG - Pendientes de siembra (Grupo)", modulo: "AG"},
    {   codigo: "AG_PEN_SIM_DET", descripcion: "AG - Pendientes de simulación (Detalle)", modulo: "AG"},
    {   codigo: "AG_PEN_SIM_GRP", descripcion: "AG - Pendientes de simulación (Grupo)", modulo: "AG"},
    {   codigo: "AG_STK_DET", descripcion: "AG - Pendientes de productos (Detalle)", modulo: "AG"},
    {   codigo: "AG_STK_GRP", descripcion: "AG - Pendientes de productos (Grupo)", modulo: "AG"},
    {   codigo: "AGC_CBH_LST", descripcion: "AG - Comprobantes de agro", modulo: "AG"},
    {   codigo: "AGCCBH", descripcion: "Comprobantes de agro", modulo: "AG"},
    {   codigo: "AGCORMVHWIZ", descripcion: "Generación de requerimientos de compras", modulo: "AG"},
    {   codigo: "AGINFSERWIZ", descripcion: "Generación de informes de servicios de compras", modulo: "AG"},
    {   codigo: "AGM_CAH_LST", descripcion: "AG - Establecimientos", modulo: "AG"},
    {   codigo: "AGMCAH", descripcion: "Maestro de Establecimientos", modulo: "AG"},
    {   codigo: "AGPARAMWIZ", descripcion: "Definición de parametros de gestión agropecuaria", modulo: "AG"},
    {   codigo: "AGR_APL_LST", descripcion: "AG - Aplicaciones de Agro", modulo: "AG"},
    {   codigo: "AGR_MVH_LST", descripcion: "AG - Movimientos de Agro", modulo: "AG"},
    {   codigo: "AGR_MVH_PCI", descripcion: "AG - Ordenes de siembra pendientes de cierre (Grupo)", modulo: "AG"},
    {   codigo: "AGR_MVH_PRV", descripcion: "AG - Ordenes de siembra finalizadas (Grupo)", modulo: "AG"},
    {   codigo: "AGRMVH", descripcion: "Registración de Gestión Agropecuaria", modulo: "AG"},
    {   codigo: "AGRMVHAPLUPDWIZ", descripcion: "Modificación de aplicaciones de Gestión Agropecuaria", modulo: "AG"},
    {   codigo: "AGRMVHUPD", descripcion: "Modificación de comprobantes de Gestión Agropecuaria", modulo: "AG"},
    {   codigo: "AGRMVHWIZ", descripcion: "Registración de gestión agropecuaria", modulo: "AG"},
    {   codigo: "AGT_ACT_LST", descripcion: "AG - Labores", modulo: "AG"},
    {   codigo: "AGT_ATH_LST", descripcion: "AG - Atributos", modulo: "AG"},
    {   codigo: "AGT_CAH_LST", descripcion: "AG - Campañas", modulo: "AG"},
    {   codigo: "AGT_CIH_LST", descripcion: "AG - Circuitos de agro", modulo: "AG"},
    {   codigo: "AGT_CIR_LST", descripcion: "AG - Códigos de circuitos de agro", modulo: "AG"},
    {   codigo: "AGT_FOH_LST", descripcion: "AG - Composición de Recetas", modulo: "AG"},
    {   codigo: "AGT_FOI_LST", descripcion: "AG - Composición de receta", modulo: "AG"},
    {   codigo: "AGT_FOR_LST", descripcion: "AG - Tipo de Recetas", modulo: "AG"},
    {   codigo: "AGT_REH_LST", descripcion: "AG - Responsables", modulo: "AG"},
    {   codigo: "AGT_TCH_LST", descripcion: "AG - Tipo de Establecimiento", modulo: "AG"},
    {   codigo: "AGT_TEH_LST", descripcion: "AG - Tipo de Explotación", modulo: "AG"},
    {   codigo: "AGT_VAR_LST", descripcion: "AG - Variedad", modulo: "AG"},
    {   codigo: "AGTACT", descripcion: "Labores", modulo: "AG"},
    {   codigo: "AGTATH", descripcion: "Atributos", modulo: "AG"}
  ];
  urlAPI = URL_SERVICESTEST;
  constructor(public http:HttpClient,public store:Store<AppState>) { }

  getmodulos(valor:string):Observable<any>{

    return this.http.get(`${this.urlAPI}/modulo`)
      .pipe(map((resp:any) =>console.log(resp)))


    // let resultados=null;
    // let regex = new RegExp(valor,'i');
    //
    // resultados = this.modulos.filter( data => regex.test(data.descripcion) || regex.test(data.codigo) )
    //
    // return new Observable(res =>{
    //   res.next(resultados);
    // });
  }


  getObjetosConFiltro(valor:string):Observable<any> {
    let resultados=null;
    let regex = new RegExp(valor,'i');
    resultados = this.objetos.filter( data => regex.test(data.descripcion) || regex.test(data.codigo) || regex.test(data.modulo));
    return new Observable(res =>{
      res.next(resultados);
    });
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
