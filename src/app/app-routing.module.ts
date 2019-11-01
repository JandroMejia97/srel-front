import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizatedGuard } from './services/auth-guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthorizatedGuard ],
    loadChildren: () => import('./reservas/reservas.module').then(r => r.ReservasModule)
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
