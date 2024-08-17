import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-card-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-card-service.component.html',
  styleUrl: './single-card-service.component.scss'
})
export class SingleCardServiceComponent {
  @Input() singlaCard: Card = {
    cardHeading: '',
    cardImage: '',
    cardParagrapg: [
      {
        paragraph: ``
      },
    ]
  };

}

interface Card {
  cardHeading: string;
  cardImage: string;
  cardParagrapg: Paragraph[];
}

interface Paragraph {
  paragraph: string;
}
