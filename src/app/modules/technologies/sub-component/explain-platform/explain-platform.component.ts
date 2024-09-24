import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explain-platform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explain-platform.component.html',
  styleUrl: './explain-platform.component.scss'
})
export class ExplainPlatformComponent {

  @Input() explainPlatform: Platform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: ``,
    paragraph: ``,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: ``,
        aboutParagraph: ``
      },
    ]
  }

}

interface Platform {
  image: string;
  heding: string;
  paragraph: string;
  aboutTechnologies: Card[]
}

interface Card {
  count: string;
  aboutHeading: string;
  aboutParagraph: string;
}
