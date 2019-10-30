import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizatedGuard } from './services/auth-guard';


const routes: Routes = [
  {
    path: 'canchas',
    canActivate: [ AuthorizatedGuard ],
    loadChildren: () => import('./reservas/reservas.module').then(r => r.ReservasModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: '',
    redirectTo: 'canchas',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
