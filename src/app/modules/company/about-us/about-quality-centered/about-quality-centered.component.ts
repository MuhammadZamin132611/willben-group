import { Component } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-about-quality-centered',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './about-quality-centered.component.html',
  styleUrl: './about-quality-centered.component.scss'
})
export class AboutQualityCenteredComponent {
  aboutPara:string=`With decades of experience in Fully Managing various IT firms. We provide companies with the technical support, expertise, and products and services they need to be productive and proactive - helping them work smarter, more securely, and with greater efficiency.`

}
