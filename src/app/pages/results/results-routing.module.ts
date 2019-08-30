import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

const resultsRoutes:Routes = [
    {
     path: 'new-ticket',
     component: NewTicketComponent,
     loadChildren: () => import('./new-ticket/new-ticket.module').then(m => m.NewTicketModule),
     data:{ titulo:"Alta de nuevo parte"}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(resultsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResultsRoutingModule { }
