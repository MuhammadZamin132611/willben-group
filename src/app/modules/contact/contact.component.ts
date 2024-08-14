import { Component } from '@angular/core';
import { ContactTopPartComponent } from "./contact-top-part/contact-top-part.component";
import { ContactFormMapComponent } from './contact-form-map/contact-form-map.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactTopPartComponent, ContactFormMapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  

}
