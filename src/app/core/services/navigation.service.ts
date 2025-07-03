import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateTo(path: string | any[]) {
    this.router.navigate(typeof path === 'string' ? [path] : path);
  }
}
