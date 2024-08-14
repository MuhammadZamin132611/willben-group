import { Component } from '@angular/core';
import { WhoAreWeComponent } from "./who-are-we/who-are-we.component";
import { StartFastComponent } from './start-fast/start-fast.component';
import { ServicesWeOfferComponent } from "./services-we-offer/services-we-offer.component";
import { OurImpactComponent } from "./our-impact/our-impact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhoAreWeComponent, StartFastComponent, ServicesWeOfferComponent, OurImpactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
