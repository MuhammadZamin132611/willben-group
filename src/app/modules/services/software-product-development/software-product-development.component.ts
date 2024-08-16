import { Component, Input } from '@angular/core';
import { OurBlogComponent } from "../../blogs/blog/our-blog/our-blog.component";

@Component({
  selector: 'app-software-product-development',
  standalone: true,
  imports: [OurBlogComponent],
  templateUrl: './software-product-development.component.html',
  styleUrl: './software-product-development.component.scss'
})
export class SoftwareProductDevelopmentComponent {
  title: string = `Insights`;

  forntend: boolean = true;
  backend: boolean = false;
  mobile: boolean = false;

  viewFonted = () => {
    this.forntend = true;
    this.backend = false;
    this.mobile = false;
  }

  viewBackend = () => {
    this.forntend = false;
    this.backend = true;
    this.mobile = false;
  }

  viewMobile = () => {
    this.forntend = false;
    this.backend = false;
    this.mobile = true;
  }

}
