import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isPopupVisibleLanguage = false;
  togglePopupLanguage() {
    this.isPopupVisibleLanguage = !this.isPopupVisibleLanguage
  }
}

