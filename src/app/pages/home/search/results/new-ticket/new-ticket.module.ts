import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewTicketComponent } from './new-ticket.component';
import { NewTicketRoutingModule } from './new-ticket-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    NewTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NewTicketRoutingModule,
    ComponentsModule
  ],
  exports:[
    NewTicketComponent
  ]
})
export class NewTicketModule { }
