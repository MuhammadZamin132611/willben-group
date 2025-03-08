import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'willben-group';

  constructor(private router: Router){
    // ScreenOrientation.lock({ orientation: 'portrait' });
  }

  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     window.scrollTo(0, 0);
    //   }
    // });
  }

  // private setStatusBarColor() {
  //   const body = document.getElementsByTagName('body')[0];
  //   const observer = new MutationObserver(() => {
  //     if (body.classList.contains('ion-color-light')) {
  //       StatusBar.setStyle({ style: Style.Dark });
  //     } else {
  //       StatusBar.setStyle({ style: Style.Light });
  //     }
  //   });

  //   observer.observe(body, {
  //     attributes: true,
  //     attributeFilter: ['class'],
  //     childList: false,
  //     characterData: false,
  //   });
  // }
}
