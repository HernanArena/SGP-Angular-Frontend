import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTicketComponent } from './create-ticket.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { CreateTicketRoutingModule } from './create-ticket-routing.module';



@NgModule({
  declarations: [
    CreateTicketComponent
  ],
  imports: [
    CommonModule,
    CreateTicketRoutingModule,
    ComponentsModule,
    RouterModule

  ],
  exports:[
    RouterModule,
    CreateTicketComponent
  ]
})
export class CreateTicketModule { }
