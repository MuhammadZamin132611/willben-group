import { Component } from '@angular/core';
import { WhoAreWeComponent } from "./who-are-we/who-are-we.component";
import { StartFastComponent } from './start-fast/start-fast.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhoAreWeComponent,StartFastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
