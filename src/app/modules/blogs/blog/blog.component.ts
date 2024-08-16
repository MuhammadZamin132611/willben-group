import { Component } from '@angular/core';
import { BlogTopComponent } from "./blog-top/blog-top.component";
import { OurBlogComponent } from "./our-blog/our-blog.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogTopComponent, OurBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  title:string='Our Blogs'

}
