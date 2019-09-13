import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
// import { SearchModule } from './search/search.module';
import { NewSuggestComponent } from './new-suggest/new-suggest.component';
import { SearchcodeComponent } from './searchcode/searchcode.component';

const homeRoutes:Routes = [
  { path: 'busqueda',
   component: SearchComponent,
   loadChildren: () => import('./search/search.module').then( m => m.SearchModule),
   data:{ titulo:"Búsqueda avanzada"}
 },
 { path: 'sugerencias',
  component: NewSuggestComponent,
  loadChildren: () => import('./new-suggest/new-suggest.module').then( m => m.NewSuggestModule),
  data:{ titulo:"Sugerencias"}
 },
 { path: 'controlados',
  component: SearchcodeComponent,
  loadChildren: () => import('./searchcode/searchcode.module').then( m => m.SearchcodeModule),
  data:{ titulo:"Busqueda por código"}
 }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
