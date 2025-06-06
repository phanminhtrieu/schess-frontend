import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  
  onClickMenuItem(menu: string): void {
    console.log('Clicked:', menu);
  }
}

