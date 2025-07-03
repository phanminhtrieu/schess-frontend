import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Routing } from 'src/app/pages/routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    LayoutComponent, // standalone
  ]
})
export class LayoutModule { }
