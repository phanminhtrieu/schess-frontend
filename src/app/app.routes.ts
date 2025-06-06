import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  // },
  // {   
  //   path: 'error',
  //   loadChildren() =>
  // },
  {
    path: '',
    component: LayoutComponent
    // canActivate
    // runGuardsAndResolvers: 'always',fdfdsf
    // loadChildren: () =>
    //   import('./core/layout/layout.module').then(m => m.LayoutModule)
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
