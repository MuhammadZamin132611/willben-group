import { Component } from '@angular/core';
import { ContactTopPartComponent } from "./contact-top-part/contact-top-part.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactTopPartComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  

}
