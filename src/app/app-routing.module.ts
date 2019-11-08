import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizatedGuard } from './services/auth-guard';
import { AuthComponent } from './auth/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthorizatedGuard ],
    loadChildren: () => import('./system/system.module').then(s => s.SystemModule)
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
