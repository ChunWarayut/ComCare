
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'content',
    loadChildren: './content/content.module#ContentModule'
  },
  {
    path: 'abount',
    loadChildren: './abount/abount.module#AbountModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'index',
    loadChildren: './index/index.module#IndexModule'
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
