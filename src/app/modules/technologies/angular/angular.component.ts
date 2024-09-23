import { Component } from '@angular/core';
import { ExplainPlatformComponent } from '../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Proven Development Tools.`,
    paragraph: `The Google-maintained AngularJS framework is an open-source JavaScript framework. You can use JavaScript, CSS, and HTML to make dynamic content. On a single page, it dramatically increases your potential to give interactive material that sticks out to company customers, clients, or readers. AngularJS is presently one of the most popular programming environments. Our Angular development outsourcing service will guarantee that your project is developed fast and without faults.`,
    aboutTechnologies: [
      {
        count: '255+',
        aboutHeading: `Engineers`,
        aboutParagraph: `Our company employs some of the most experienced and skilled Angular developers in Eastern Europe.`
      },
      {
        count: '255+',
        aboutHeading: `Projects`,
        aboutParagraph: `Angular development outsourcing has filled our portfolio with lots of projects worthy of your attention.`
      },
      {
        count: '10+',
        aboutHeading: `Years of Experience`,
        aboutParagraph: `Being in the game that long, we didn’t lose our passion for innovative tools such as Angular framework.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack`,
    paragraph: `Our knowledge in Angular development outsourcing does not end there. Our talents and experience encompass practically every programming language, framework, and library, both those that have been around for a lot longer and others that have been launched recently by industry leaders like Google or Microsoft.`,
    techImages: [
      {
        logo: `../../../../../assets/javascript.svg`,
        techName: `JavaScript`
      },
      {
        logo: `../../../../../assets/angular.svg`,
        techName: `Angular`
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
          subHeading: `One click away`,
          subParagraph: `Just fill in the intake form here on this website, and we’ll start estimating your project right away.`
        },
        {
          subHeading: `Goals setting`,
          subParagraph: `Together with our manager, you will define your project objectives for the long term.`
        },
        {
          subHeading: `Dedicated team`,
          subParagraph: `We’ll form the team to work on your project and even hire AngularJS developers if needed`
        },
        {
          subHeading: `Let’s go!`,
          subParagraph: `The work will start immediately after you meet and approve your software development team.`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Benefits of Angular`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Quality first`,
        subParagraph: `We always prefer code quality over deadlines and budget constraints.You'll always get the most out of your project plan when you work with Senwell Group Private Limited.`
      },
      {
        count: `02`,
        subHeading: `Customized solutions`,
        subParagraph: `We build software from the scratch, so you don't have to care about project planning, business analysis, UI/UX design, technical support, or anything else.`
      },
      {
        count: `03`,
        subHeading: `Honesty and Integrity`,
        subParagraph: `We encourage all of our clients to speak with us in a non-bureaucratic manner, and we set up our working process so that they may easily and immediately access the outcomes of our full-time work.`
      },
      {
        count: `04`,
        subHeading: `Global reputation`,
        subParagraph: `We've been working on making our name a globally recognized brand for the past 15 years.It wasn't for naught, as shown by our industry accolades and projects alongside Fortune 500 business`
      },
      {
        count: `05`,
        subHeading: `Software development teams`,
        subParagraph: `Our Angular development operations, unlike freelance, give specialized teams that can cover all stages of software development. You won't have to look for a designer or QA analyst since we'll do it for you.`
      },
      {
        count: `06`,
        subHeading: `Post-production assistance`,
        subParagraph: `The development stage, while it may appear to be the end of your adventure, is far from it. In truth, post-production assistance can be stressful and costly; the good news is that we can provide it for all of our productions.`
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
