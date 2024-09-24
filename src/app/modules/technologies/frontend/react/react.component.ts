import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { HeadingDescriptionComponent } from '../../sub-component/heading-description/heading-description.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [HeadingDescriptionComponent, ExplainPlatformComponent, RouterLink, TechStackComponent, TechBenefitsComponent],
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

  techStack = {
    heading: `Tech Stack`,
    paragraph: `Our knowledge in React development outsourcing does not end there. Our talents and experience encompass practically every programming language, framework, and library, both those that have been around for a long time and others that have been launched recently by industry leaders like Google or Microsoft.`,
    techImages: [
      {
        logo: `../../../../../assets/javascript.svg`,
        techName: `JavaScript`
      },
      {
        logo: `../../../../../assets/react.svg`,
        techName: `React`
      },
      {
        logo: `../../../../../assets/typescript.png`,
        techName: `TypeScript`
      },
      {
        logo: `../../../../../assets/vue.svg`,
        techName: `Vue.Js`
      },
    ],
    aboutTech: {
      heading: `React development step by step`,
      aboutDetails: [
        {
          subHeading: `Write to Us`,
          subParagraph: `Tell us about your front-end development needs and we will take care of the rest.`
        },
        {
          subHeading: `Define requirements`,
          subParagraph: `We will talk through all the necessary details, identify all tech specs and requests.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We will handpick a development team that fits your needs best and start on your project at once.`
        },
        {
          subHeading: `Prepare to deploy`,
          subParagraph: `Your project will be delivered on time and within proper budget and systematic Implementation and will continue to prosper!`
        },
      ]
    }
  }
  

  techBenefits = {
    techName: `Benefits of React`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Internal Educational Program`,
        subParagraph: `Thanks to our internal educational courses, our front-end developers are always at the top of their game. Their knowledge goes far beyond keeping up with the latest technological innovations.`
      },
      {
        count: `02`,
        subHeading: `Instant resource replacement `,
        subParagraph: `We carefully select the finest developers for every project, but with almost 150+ engineers at work, we're always ready to try something different.`
      },
      {
        count: `03`,
        subHeading: `Transparent Code Monitoring `,
        subParagraph: `We have a quality assurance system that really is quick, accessible, and transparent. You could relax knowing that every piece of code will be inspected.`
      },
      {
        count: `04`,
        subHeading: `Tailoring Processes if Needed`,
        subParagraph: `Every project and organization demands a different strategy. We embrace Agile, but we've also collaborated with Waterfall, V-Model, Spiral, and other approaches.`
      },
      {
        count: `05`,
        subHeading: `System Administration Included`,
        subParagraph: `We deliver system administration services at no incremental cost. Your business functions will work smoothly, and your IT management expenses will be slashed.`
      },
      {
        count: `06`,
        subHeading: `Trial Periods for New Employees`,
        subParagraph: `When you bring in new developers, you might execute a short pilot project with them just to ensure that they can match your aspirations and the project's functional characteristics.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Start with confidence.`,
        subParagraph: `Our goal is to help you launch quickly and make sure you’ll want to work with us again.`
      },
      {
        subHeading: `100% Transparency`,
        subParagraph: `Clear communication, flexible pricing, and full dedication to your success.`
      },
      {
        subHeading: `Excellent Code Quality`,
        subParagraph: `We check the quality of our code at every step of development to ensure best results.`
      },
      {
        subHeading: `Cross-domain expertise`,
        subParagraph: `Need services beyond front-end development? We will have you covered.`
      },
    ]
  }

}
