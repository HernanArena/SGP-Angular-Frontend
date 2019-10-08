import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';
import { ModifyTicketComponent } from './modify-ticket/modify-ticket.component';

const ticketCreatorRoutes:Routes = [
{
  path: 'crear',
  component: CreateTicketComponent,
  loadChildren: () => import('./create-ticket/create-ticket.module').then( m => m.CreateTicketModule),
  data:{ titulo:"Crear documentos"}
},
{
  path: 'borrar',
  component: DeleteTicketComponent,
  loadChildren: () => import('./delete-ticket/delete-ticket.module').then( m => m.DeleteTicketModule),
  data:{ titulo:"Borrar documentos"}
 },
 {
   path: 'modificar',
   component: ModifyTicketComponent,
   loadChildren: () => import('./modify-ticket/modify-ticket.module').then( m => m.ModifyTicketModule),
   data:{ titulo:"Modificar documentos"}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ticketCreatorRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class TicketCreatorRoutingModule { }
