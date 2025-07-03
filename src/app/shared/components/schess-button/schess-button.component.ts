import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-schess-button',
  standalone: true,
  imports: [ CommonModule, NzButtonModule],
  templateUrl: './schess-button.component.html',
  styleUrls: ['./schess-button.component.scss'] // ❗ ĐẢM BẢO có "styleUrls", không phải "styleUrl"
})
export class SchessButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'default' | 'dashed' | 'text' | 'primary' = 'default';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
