import { Component } from '@angular/core';
import { OurBlogComponent } from "../../blogs/blog/our-blog/our-blog.component";

@Component({
  selector: 'app-software-product-development',
  standalone: true,
  imports: [OurBlogComponent],
  templateUrl: './software-product-development.component.html',
  styleUrl: './software-product-development.component.scss'
})
export class SoftwareProductDevelopmentComponent {

}
