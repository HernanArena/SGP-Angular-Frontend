
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SearchcodeComponent } from './searchcode/searchcode.component';
import { NewSuggestComponent } from './new-suggest/new-suggest.component';

const pagesRoutes: Routes = [
    { path: 'escritorio',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    { path: 'busqueda',
     component: SearchComponent,
     data:{ titulo:"Búsqueda avanzada"}
    },
    { path: 'panel',
     component: HomeComponent,
     data:{ titulo:"Panel de consulta"}
    },
    { path: 'controlados',
     component: SearchcodeComponent,
     data:{ titulo:"Busqueda por código"}
    },
    { path: 'resultados',
     component: ResultsComponent,
     data:{ titulo:"Resultados de búsqueda"}
    },
    { path: 'sugerencias',
     component: NewSuggestComponent,
     data:{ titulo:"Sugerencias"}
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/panel'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
