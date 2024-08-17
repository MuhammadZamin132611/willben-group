import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-top-part',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-top-part.component.html',
  styleUrl: './services-top-part.component.scss'
})
export class ServicesTopPartComponent {


  @Input() serviceTopPart: Services = {
    heading: '',
    paragraph: '',
    topCard: [
      {
        cardHeading: '',
        cardImage: '',
        cardParagrapg: '',
      },
    ],
  };
  

}
interface Card {
  cardHeading: string;
  cardImage: string;
  cardParagrapg: string;
}

interface Services {
  heading: string;
  paragraph: string;
  topCard: Card[]; 
}
