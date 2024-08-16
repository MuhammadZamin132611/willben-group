import { Component } from '@angular/core';
import { OurBlogComponent } from '../../blogs/blog/our-blog/our-blog.component';

@Component({
  selector: 'app-customer-software-development',
  standalone: true,
  imports: [OurBlogComponent],
  templateUrl: './customer-software-development.component.html',
  styleUrl: './customer-software-development.component.scss'
})
export class CustomerSoftwareDevelopmentComponent {
  title: string = 'Insights';

  languages: boolean = true;
  database: boolean = false;
  freameWorks: boolean = false;

  viewLANGUAGES = () => {
    this.languages = true;
    this.database = false;
    this.freameWorks = false;
  }

  viewDATABASE = () => {
    this.languages = false;
    this.database = true;
    this.freameWorks = false;
  }

  viewFRAMEWORKS = () => {
    this.languages = false;
    this.database = false;
    this.freameWorks = true;
  }
}
