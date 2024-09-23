import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-benefits.component.html',
  styleUrl: './tech-benefits.component.scss'
})
export class TechBenefitsComponent {

  @Input() techBenefits:TechBenefits = {
    techName: ``,
    techDescription: [
      {
        count: ``,
        subHeading: ``,
        subParagraph: ``
      },
    ],
    heading: ``,
    aboutTech: [
      {
        subHeading: ``,
        subParagraph: ``
      }
    ]
  }

}

interface TechBenefits {
  techName: string;
  heading: string;
  techDescription: TechDescription[]
  aboutTech: AboutTech[]
}

interface TechDescription {
  count: string;
  subHeading: string;
  subParagraph: string;
}

interface AboutTech {
  subHeading: string;
  subParagraph: string;
}
