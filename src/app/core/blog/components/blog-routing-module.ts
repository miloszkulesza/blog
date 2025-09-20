import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPage } from './blog-page/blog-page';
import { Info } from './info/info';
import { Contact } from './contact/contact';
import { AuthGuard } from '../../../auth-guard';
import { OnePost } from './one-post/one-post';

const routes: Routes = [
  {path: 'blog-page', component: BlogPage, canActivate: [AuthGuard]},
  {path: 'info', component: Info, canActivate: [AuthGuard]},
  {path: 'contact', component: Contact, canActivate: [AuthGuard]},
  {path: 'one-post/:id', component: OnePost, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
