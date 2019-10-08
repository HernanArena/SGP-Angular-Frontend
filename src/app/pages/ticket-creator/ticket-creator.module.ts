import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCreatorRoutingModule } from './ticket-creator-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { TicketCreatorComponent } from './ticket-creator.component';
import { CreateTicketModule } from './create-ticket/create-ticket.module';
import { DeleteTicketModule } from './delete-ticket/delete-ticket.module';
import { ModifyTicketModule } from './modify-ticket/modify-ticket.module';



@NgModule({
  declarations: [
    TicketCreatorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    DeleteTicketModule,
    CreateTicketModule,
    ModifyTicketModule,
    TicketCreatorRoutingModule
  ],
  exports:[
    TicketCreatorComponent,
  ]
})
export class TicketCreatorModule { }
