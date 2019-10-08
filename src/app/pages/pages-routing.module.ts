
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketCreatorComponent } from './ticket-creator/ticket-creator.component';


const pagesRoutes: Routes = [
    { path: 'escritorio',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    { path: 'panel',
     component: HomeComponent,
     loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
     data:{ titulo:"Panel de consulta"}
    },
    { path: 'perfil',
     component: ProfileComponent,
     data:{ titulo:"Perfil de usuario" }
    },
    { path: 'documentos',
     component: TicketCreatorComponent,
     loadChildren: () => import('./ticket-creator/ticket-creator.module').then( m => m.TicketCreatorModule),
     data:{ titulo:"Errores Documentados" }
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/panel'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
