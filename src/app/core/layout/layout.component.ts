import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NavigationService } from '../services/navigation.service';
import { FormsModule } from '@angular/forms';
import { SchessButtonComponent } from '@app/shared/components/schess-button/schess-button.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule, 
    NzBreadCrumbModule, 
    NzIconModule, 
    NzMenuModule, 
    NzLayoutModule, 
    NzAvatarModule, 
    NzSelectModule, 
    FormsModule,
    SchessButtonComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  
  constructor(private navigationService: NavigationService) {}

  selectedLang: string = 'en';

  onClickMenuItem(menu: string): void {
    switch (menu) {
      case 'Home':
        this.navigationService.navigateTo('');
        break;
      case 'Dashboard':
        this.navigationService.navigateTo('dashboard');
        break;
      case 'Collection':
        this.navigationService.navigateTo('collection');
        break;
      case 'Plan':
        this.navigationService.navigateTo('plan');
        break;
    }
  }
}

