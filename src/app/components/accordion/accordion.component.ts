import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input('content') public cards:any[] = [];
  currentlyOpenedItemIndex = -1;
  panel = [
        {
            "Titulo": "Novedades de Versión 4.3",
            "Descripcion": "Incluye las principales características de la versión - V.1.0",
            "PATH": "http://logic.softland.com.ar:8081/DocuWEB/GSA_DOC_NV_Version_4_3.pdf"
        },
        {
            "Titulo": "Historial Versiones (desde Version 3.0)",
            "Descripcion": "Se incluyen las novedades de versión desde la versión 3.0 a la actual vigente.",
            "PATH": "http://logic.softland.com.ar:8081/DocuWEB/GSA_DOC_NV_Historial_Versiones_Logic.pdf"
        },
        {
            "Titulo": "Documentación Completa",
            "Descripcion": "Documentación Funcional, Técnica y Novedades de versión de Softland Logic 4.0",
            "PATH": "http://logic.softland.com.ar:8081/DocuWEB/DocCompleta.zip"
        },
        {
            "Titulo": "Script Para Documento 3419. 5 Caracteres",
            "Descripcion": "Incremento de 4 a 5 caracteres del punto de venta del comprobante original, en cumplimiento con R.G. AFIP N° 4290/2018",
            "PATH": "http://logic.softland.com.ar:8081/docuWeb/Script_Documento_3419_5_Caracteres.zip"
        },
        {
            "Titulo": "Novedades de Versión 4.2",
            "Descripcion": "Incluye las principales características de la versión - V.1.0",
            "PATH": "http://logic.softland.com.ar:8081/DocuWEB/GSA_DOC_NV_Version_4_2.pdf"
        },
          {
            "Titulo": "Novedades de Versión 4.1",
            "Descripcion": "Incluye las principales características de la versión - V.1.1",
            "PATH": "http://logic.softland.com.ar:8081/DocuWEB/GSA_DOC_NV_Version_4_1.pdf"
        }
    ]
  constructor() {
  }

  ngOnInit() {
  }
  recalcularCards(){
    if(this.cards==undefined) return [];
    return this.cards.filter((data:any)=>{
      let regex = new RegExp('DocuWEB','i')
      if(regex.test(data.PATH)){
        return data;
      }
    })
  }

}
