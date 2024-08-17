import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leading-multinational-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leading-multinational-clients.component.html',
  styleUrl: './leading-multinational-clients.component.scss'
})
export class LeadingMultinationalClientsComponent {
  @Input() multinationalClients: Clients = {
    heading: '',
    paragraph: '',
    images: [
      {
        image: '',
        logoName:''
      }
    ]
  }

}
interface Clients {
  heading: string;
  paragraph: string;
  images: Images[];
}

interface Images {
  image: string;
  logoName:string;
}