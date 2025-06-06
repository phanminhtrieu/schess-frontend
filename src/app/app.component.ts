import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestService } from './core/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  isCollapsed = false;
  
  constructor(
    private testService: TestService
  ) {

  }

  ngOnInit(): void {
    this.testService.getAllProducts().subscribe((res) => console.log('🔑🔑🔑'));
  }
}
