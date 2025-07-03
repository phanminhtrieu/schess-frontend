import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent:() => 
      import('./pages/auth/auth.component').then(m => m.AuthComponent),
  },
  {   
    path: 'error',
    loadComponent: () =>
      import('./pages/error/error.component').then(m => m.ErrorComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    runGuardsAndResolvers: 'always',
    loadComponent: () => 
      import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'collection',
        loadComponent: () =>
          import('./pages/collection/collection.component').then(m => m.CollectionComponent)
      },
      {
        path: 'plan',
        loadComponent: () => 
          import('./pages/plan/plan.component').then(m => m.PlanComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/error',
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
