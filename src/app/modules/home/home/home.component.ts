import { Component } from '@angular/core';
import { WhoAreWeComponent } from "./who-are-we/who-are-we.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhoAreWeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
