import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-top',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-top.component.html',
  styleUrl: './blog-top.component.scss'
})
export class BlogTopComponent {
  blogPara: string = 'Maintain up to date with the most recent innovations and trends in the rapidly changing field of technology. Keep yourself updated about the latest trends and changes that are affecting the innovation landscape.';

}
