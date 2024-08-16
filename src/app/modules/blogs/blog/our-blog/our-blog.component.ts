import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-blog.component.html',
  styleUrl: './our-blog.component.scss'
})
export class OurBlogComponent {
  firstPara: string = `Benefits of implementing APIs in a Business`;
  secondPara: string = `In today's dynamic digital commerce landscape, Application Programming Interfaces (APIs) have emerged..`;
  thirdPara: string = `Most Popular Oops Languages in 2024`;
  fourthPara: string = `Learn more about this revolutionary concept and the key languages considered essential to its success.....`;
  fifthPara: string = `Why is React js Popular in 2024 ?`;
  sixPara: string = `ReactJS has really taken the tech world by storm, with over 220,000 live websites already using its power....`;
  sevenPara: string = `Is java future of App Development ?`;
  eightPara: string = `When developing applications, the choice of programming language can be important....`;

  @Input() title: any
}
