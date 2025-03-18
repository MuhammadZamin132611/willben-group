import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { App as CapacitorApp } from '@capacitor/app';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'willben-group';

  constructor(private router: Router, private location: Location) {
  }

  handleBackButton() {
    CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (this.router.url !== '/') {
        // Go back using Angular routing
        this.location.back();
      } else {
        // Optionally exit app only from home
        CapacitorApp.exitApp();
      }
    });
  }

  ngOnInit(): void {

  }


}
