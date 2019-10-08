import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComboService } from 'src/app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-ticket',
  templateUrl: './modify-ticket.component.html',
  styleUrls: ['./modify-ticket.component.css']
})
export class ModifyTicketComponent implements OnInit {


      public codigoSelect: any[]=[];
      private codigoSubscription:Subscription
      public codigo:any;
      public termino:string = "";

      constructor(public _cb: ComboService,
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
        }else{
          this._cb.getCodigoError(null)
          .subscribe(data => {this.codigoSelect = data.partes;});
        }
      }

}
