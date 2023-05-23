import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthQuardService } from './services/auth-quard.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokkentGetter() {
  return localStorage.getItem("jwt")
}

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthQuardService],
    loadChildren: () =>
    import('./shell/shell.module').then((m) => m.ShellModule),
},

{
  path: 'login',
  loadChildren: () =>
  import('./login/login.module').then((m) => m.LoginModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  JwtModule.forRoot({
    config: {
      tokenGetter: tokkentGetter,
      allowedDomains: ["localhost:52907"],
      disallowedRoutes: []
    }
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
