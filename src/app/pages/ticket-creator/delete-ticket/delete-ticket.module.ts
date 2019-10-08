import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTicketRoutingModule } from './delete-ticket-routing.module';
import { RouterModule } from '@angular/router';
import { DeleteTicketComponent } from './delete-ticket.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    DeleteTicketComponent
  ],
  imports: [
    CommonModule,
    DeleteTicketRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    RouterModule,
    DeleteTicketComponent
  ]
})
export class DeleteTicketModule { }
