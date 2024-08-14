import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-contact-form-map',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './contact-form-map.component.html',
  styleUrl: './contact-form-map.component.scss'
})
export class ContactFormMapComponent {
  para1: string = `Complete the form, and we'll get back to you shortly!`;
  para2: string = `How may we assist you?`;

}
