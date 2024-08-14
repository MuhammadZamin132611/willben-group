import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-contact-top-part',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './contact-top-part.component.html',
  styleUrl: './contact-top-part.component.scss'
})
export class ContactTopPartComponent {
  contactPara: string = 'Whether you want to collaborate, give projects, or join our team, we welcome the opportunity to engage with you. Our dedicated team is just a message away, ready to provide the support you need.Feel free to reach out through the provided contact details or simply fill out the contact form. Your feedback and queries are important to us, and we look forward to being in touch.';
  salesPara: string = `Please share your requirements, and our expert team will be happy to assist you.`;
  supportPara: string = `Our expert team is ready to support you 24/7. We are always willing to resolve any doubts or problems as soon as possible.`;
  carrerPara:string = `Looking for a diverse work culture? Senwell Group Private Limited is the right choice for you!`
}
