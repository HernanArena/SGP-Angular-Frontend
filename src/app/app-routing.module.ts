import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/guards/login.guard';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
      path: '',
      component: PagesComponent,
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
      canLoad:[LoginGuard]
    },
    { path: '**', redirectTo: '/login' }
];
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{useHash:true});
