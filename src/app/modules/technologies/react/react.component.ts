import { Component } from '@angular/core';
import { HeadingDescriptionComponent } from "../sub-component/heading-description/heading-description.component";
import { ExplainPlatformComponent } from "../sub-component/explain-platform/explain-platform.component";
import { RouterLink } from '@angular/router';
import { TechStackComponent } from "../sub-component/tech-stack/tech-stack.component";

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [HeadingDescriptionComponent, ExplainPlatformComponent, RouterLink, TechStackComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Flawless Performance.Great User Experience`,
    paragraph: `From start-ups to well-established companies, almost everyone these days uses ReactJS to build native apps. This open-source JavaScript framework specializes in building UIs and has been designed to help create apps for both Android and iOS platforms. ReactJS is considered one of the best front-end development frameworks as it enables developers to build robust & complex products. Utilize our React outsourcing capacity and build a robust solution for your own business!`,
    aboutTechnologies: [
      {
        count: '250+',
        aboutHeading: `Skilled Engineers`,
        aboutParagraph: `Whether you hire one or 10 React developers, we guarantee that you will be working only with Middle and Senior level engineers.`
      },
      {
        count: '275+',
        aboutHeading: `React Projects`,
        aboutParagraph: `With years of experience delivering top-notch React development services, our skilled developers can handle projects of any complexity.`
      },
      {
        count: '8+',
        aboutHeading: `Years of Experiences`,
        aboutParagraph: `Our most experienced React engineers were early adopters of the library and started implementing its features as early as 2013.`
      },
    ]
  }
  

}
