import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket.component';

const createTicketRoutes:Routes =[
  { path: 'crear',
   component: CreateTicketComponent,
   data:{ titulo:"Crear documentos"}
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(createTicketRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CreateTicketRoutingModule { }
