import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalWizardService } from 'src/app/services/modal-wizard/modal-wizard.service';
import { Subscription } from 'rxjs';
import { ComboService } from 'src/app/services/combo/combo.service';


@Component({
  selector: 'app-searchcode',
  templateUrl: './searchcode.component.html',
  styleUrls: ['./searchcode.component.css']
})
export class SearchcodeComponent implements OnInit {

  public codigoSelect: any[]=[];
  private codigoSubscription:Subscription
  public codigo:any;
  public termino:string = "";

  constructor(public _cb: ComboService,
              public _ms: ModalWizardService,
              private cd: ChangeDetectorRef) { }


  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  public getError(value:any,evento:any){
    let regex = new RegExp('^Arrow?','i');
    if(!regex.test(evento.key)){
      if(value){
        this.codigoSubscription = this._cb.getCodigoError(value).subscribe(data => {
          this.codigoSelect = data.partes
        });
      }else{
        this.codigoSubscription = this._cb.getCodigoError(null).subscribe(data => {
          this.codigoSelect = data.partes
        });
      }
    }

  }

  public seleccionaError(value){

    if(this.codigo){
      this.cd.markForCheck();
      this.codigo = value;
      this.cd.detectChanges();
      let codigoSelect = this.codigoSelect
                        .filter((value)=>{
                          return value.codigo == this.codigo.codigo
                        })[0];
      if(codigoSelect){
        this._ms.setStep(codigoSelect.items.length);
        this._ms.setCodigo(codigoSelect.codigo);
        this._ms.setDescripcion(codigoSelect.descripcion);
        this._ms.setTexto(codigoSelect.texto);
        this._ms.setContenido(codigoSelect.items);
      }
    }else{
      this._cb.getCodigoError(null)
      .subscribe(data => {this.codigoSelect = data.partes;});
    }
  }

  public mostrarModal(){
    let codigoSelect = this.codigoSelect
                      .filter((value)=>{
                        return value.codigo == this.codigo.codigo
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
