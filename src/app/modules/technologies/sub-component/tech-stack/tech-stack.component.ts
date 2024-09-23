import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  @Input() techStack:TechStack = {
    heading: ``,
    paragraph: ``,
    techImages: [
      {
        logo: ``,
        techName: ``
      },
    ],
    aboutTech: {
      heading: ``,
      aboutDetails: [
        {
          subHeading: ``,
          subParagraph: ``
        },
      ]
    }
  }

}

interface TechStack {
  heading: string;
  paragraph: string;
  techImages: ImageDetails[];
  aboutTech: AboutTech;
}
interface ImageDetails {
  logo: string;
  techName: string;
}

interface AboutTech {
  heading:string;
  aboutDetails:AboutDetails[];
}

interface AboutDetails {
  subHeading: string;
  subParagraph: string;
}