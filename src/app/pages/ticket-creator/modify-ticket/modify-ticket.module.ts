import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyTicketComponent } from './modify-ticket.component';
import { ModifyTicketRoutingModule } from './modify-ticket-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ModifyTicketComponent
  ],
  imports: [
    CommonModule,
    ModifyTicketRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    RouterModule,
    ModifyTicketComponent
  ]
})
export class ModifyTicketModule { }
