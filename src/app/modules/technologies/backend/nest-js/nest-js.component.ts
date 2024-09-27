import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-nest-js',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './nest-js.component.html',
  styleUrl: './nest-js.component.scss'
})
export class NestJsComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Exceptional Performance. Outstanding User Experience.`,
    paragraph: `Willben Group Private Limited offers state-of-the-art Nest js development services, creating scalable and trustworthy Nest js applications to solve business problems. We also provide outstanding DevOps services to maximize benefits for customers in a variety of sectors.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Engineers`,
        aboutParagraph: `We promise that you will only work with middle and senior level engineers whether you hire one or eight Nest JS developers.`
      },
      {
        count: '',
        aboutHeading: `Nest js Projects`,
        aboutParagraph: `Our outstanding Nest.js development outsourcing has allowed us to produce a plethora of notable projects that deserve your attention and are included in our portfolio.`
      },
      {
        count: '',
        aboutHeading: `Years of Experience`,
        aboutParagraph: `Despite our extensive experience, we remain devoted to cutting-edge tools, as evidenced by our enthusiastic support for the Nest.js framework.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack`,
    paragraph: `Skilled in a variety of domains and state-of-the-art technologies, we demonstrate our proficiency in Nest.js development. Delivering significant value to our clients and the industry at large is our main goal with every assignment. This demonstrates our steadfast dedication to generating the cleanest possible code and reaching optimal performance.`,
    techImages: [
      {
        logo: `../../../../../assets/nextjs.png`,
        techName: `Nest Js`
      },
      {
        logo: `../../../../../assets/javascript.svg`,
        techName: `JavaScript`
      },
      {
        logo: `../../../../../assets/typescript.png`,
        techName: `TypeScript`
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Get to know us`,
          subParagraph: `Give us the details of your backend development needs, and we'll take care of the rest.`
        },
        {
          subHeading: `Set an objective`,
          subParagraph: `Create and implement a scalable Nest.js application that satisfies specifications, guaranteeing peak performance and maintainability over its long life.`
        },
        {
          subHeading: `Form a team`,
          subParagraph: `We will put together a devoted group of knowledgeable Nest JS developers who are willing to work on your project full-time.`
        },
        {
          subHeading: `Start working`,
          subParagraph: `The development process is ready for a new beginning once you've had a chance to meet and approve the team!`
        },
      ]
    }
  }


  techBenefits = {
    techName: `Benefits of Nest js`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Dependency Injection`,
        subParagraph: `Dependency injection is used by Nest.js to improve testability, resulting in code that is reliable and simple to test.`
      },
      {
        count: `02`,
        subHeading: `Scalability`,
        subParagraph: `Because Nest.js is designed to be scalable, applications can expand seamlessly as demand rises.`
      },
      {
        count: `03`,
        subHeading: `Middleware Integration`,
        subParagraph: `Performance is improved when middleware is integrated seamlessly and HTTP requests are handled effectively.`
      },
      {
        count: `04`,
        subHeading: `Real-Time Applications`,
        subParagraph: `The WebSocket gateway included in Nest.js makes it easier to create applications for bidirectional, real-time communication.`
      },
      {
        count: `05`,
        subHeading: `Built-in Testing Utilities`,
        subParagraph: `Nest.js ensures the dependability of your application by streamlining the testing process with integrated utilities.`
      },
      {
        count: `06`,
        subHeading: `DevOps-Friendly`,
        subParagraph: `Nest.js facilitates a DevOps-friendly environment by streamlining the development workflow with features like hot-reloading.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Quick start`,
        subParagraph: `Our work together usually starts in a few days because we work around bureaucratic procedures in our workflows.`
      },
      {
        subHeading: `Fair deal`,
        subParagraph: `You are the only one who can determine how involved in the development you want to be, and all of our operations are completely transparent.`
      },
      {
        subHeading: `Flawless code`,
        subParagraph: `We hold software testing and coding to the same high standards, and we are passionate about both. Our dedication to quality assurance should be in line with your expectations.`
      },
      {
        subHeading: `Industry experts`,
        subParagraph: `Rest assured, should your project evolve into greater technical complexity over time, the Willben Group Private Limited team will adeptly adjust to meet the challenge.`
      },
    ]
  }

}
