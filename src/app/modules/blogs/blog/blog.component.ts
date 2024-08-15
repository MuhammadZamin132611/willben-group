import { Component } from '@angular/core';
import { BlogTopComponent } from "./blog-top/blog-top.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogTopComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
