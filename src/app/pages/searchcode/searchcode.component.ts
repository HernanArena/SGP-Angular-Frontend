import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchcodeService } from 'src/app/services/searchcode/searchcode.service';
import { ModalWizardService } from 'src/app/services/modal-wizard/modal-wizard.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-searchcode',
  templateUrl: './searchcode.component.html',
  styleUrls: ['./searchcode.component.css']
})
export class SearchcodeComponent implements OnInit {

  errorCode:string;
  codigoSelect: any[]=[];
  codigoSubscription:Subscription
  codigo:string;
  termino:string = "";

  constructor(public _scs: SearchcodeService,
              public _ms:  ModalWizardService,
              private cd:  ChangeDetectorRef) { }


  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  getError(value:any,evento:any){
    let regex = new RegExp('^Arrow?','i');
    if(!regex.test(evento.key)){
      if(value){
        this.codigoSubscription = this._scs.getCodigoError(value).subscribe(data => {
          this.codigoSelect = data
        });
      }else{
        this.codigoSubscription = this._scs.getCodigoError(null).subscribe(data => {
          this.codigoSelect = data
        });
      }
    }

  }

  seleccionaError(value){
    if(this.codigo){
      this.cd.markForCheck();
      this.codigo = value;
      this.cd.detectChanges();
      let codigoSelect = this.codigoSelect
                        .filter((value)=>{
                          return value.codigo == this.codigo
                        })[0];

      this._ms.setStep(codigoSelect.items.length);
      this._ms.setCodigo(codigoSelect.codigo);
      this._ms.setDescripcion(codigoSelect.descripcion);
      this._ms.setTexto(codigoSelect.texto);
      this._ms.setContenido(codigoSelect.items);


    }else{
      this._scs.getCodigoError(null)
      .subscribe(data => {this.codigoSelect = data;});
    }
  }

  mostrarModal(){
    let codigoSelect = this.codigoSelect
                      .filter((value)=>{
                        return value.codigo == this.codigo
                      })[0];
    this._ms.setStep(codigoSelect.items.length);
    this._ms.setCodigo(codigoSelect.codigo);
    this._ms.setDescripcion(codigoSelect.descripcion);
    this._ms.setTexto(codigoSelect.texto);
    this._ms.setContenido(codigoSelect.items);
    this._ms.mostrarModal('','');
  }
  //A pedido de her
  ngOnDestroy(): void {
  //  this.codigoSubscription.unsubscribe();
  }
}
