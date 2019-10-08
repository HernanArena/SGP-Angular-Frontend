import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModifyTicketComponent } from './modify-ticket.component';

const modifyTicketRoutes:Routes =[
  { path: 'modificar',
   component:ModifyTicketComponent,
   data:{ titulo:"Crear documentos"}
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(modifyTicketRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ModifyTicketRoutingModule { }
