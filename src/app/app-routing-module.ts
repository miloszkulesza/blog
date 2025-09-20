import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog } from './core/blog/blog';
import { Auth } from './core/auth/auth';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'blog', component: Blog, canActivate: [AuthGuard]},
  {path: 'login', component: Auth}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
