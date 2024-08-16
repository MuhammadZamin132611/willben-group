import { Component } from '@angular/core';
import { AboutQualityCenteredComponent } from "./about-quality-centered/about-quality-centered.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutQualityCenteredComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  aboutPara: string = `At Willben Group Private Limited, we are your partners in navigating the dynamic landscape of technology. As a leading Information Technology company, we specialize in delivering tailored solutions that empower businesses to thrive in the digital age.`

}
