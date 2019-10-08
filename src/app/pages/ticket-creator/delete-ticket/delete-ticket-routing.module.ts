import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeleteTicketComponent } from './delete-ticket.component';


const deleteTicketRoutes:Routes =[
  { path: 'borrar',
   component:DeleteTicketComponent,
   data:{ titulo:"Borrar documentos"}
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(deleteTicketRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class DeleteTicketRoutingModule { }
