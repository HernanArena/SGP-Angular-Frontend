import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewTicketComponent } from './new-ticket.component';

const newTicketRoutes:Routes = [
  { path: 'new-ticket',
   component: NewTicketComponent,
   data:{ titulo:"Alta de nuevo parte"}
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(newTicketRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class NewTicketRoutingModule { }
