import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent} from  './results/results.component';

const searchRoutes:Routes = [
  { path: 'resultados',
   component: ResultsComponent,
   loadChildren: () => import('./results/results.module').then(m => m.ResultsModule),
   data:{ titulo:"Resultados"}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class SearchRoutingModule { }
