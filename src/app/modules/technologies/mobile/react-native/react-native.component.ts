import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-react-native',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './react-native.component.html',
  styleUrl: './react-native.component.scss'
})
export class ReactNativeComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Fast Start,Quality Code.`,
    paragraph: `React Native App Development is one of the most efficient ways to create mobile apps, By designing apps in the React Native Framework, Our technical experts can help you get them to market faster on multiple platforms, and manage them more effectively, and at a lower cost Our React Native developers use the framework to its full potential, finding the single best way to implement the features your business needs to succeed.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Extensive experience`,
        aboutParagraph: `Years of reliable mobile application development service with a proven track record of success stories.`
      },
      {
        count: '',
        aboutHeading: `Accomplished professionals `,
        aboutParagraph: `Qualified mobile application engineers with strong programming skills and deep expertise in various domains.`
      },
      {
        count: '',
        aboutHeading: `Trusted partnerships`,
        aboutParagraph: `Hundreds of companies around the world entrusted us with building and maintaining their apps.`
      },
    ]
  }

  techStack = {
    heading: `Our Technology Expertise`,
    paragraph: `React Native is one of the main development frameworks that we work with, Whether you need a native or hybrid application, a simple project or a complex enterprise suite with cross-platform capabilities — our React Native engineers will have you covered.`,
    techImages: [
      {
        logo: `../../../../../assets/javascript.svg`,
        techName: `JavaScript`
      },
      {
        logo: `../../../../../assets/reactNative.svg`,
        techName: `React Native`
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
          subHeading: `Reach out to us`,
          subParagraph: `Fill out the contact form on our website providing basic information on what you need .`
        },
        {
          subHeading: `Outline your goals`,
          subParagraph: `Now that we’ve connected and discussed the request, your personal manager will gather.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We analyze your request and provide you with a list of handpicked candidates best.`
        },
        {
          subHeading: `Get to work`,
          subParagraph: `Now that you’ve decided on your options for collaboration, the required specialists, their time.`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Building React Native `,
    techDescription: [
      {
        count: `01`,
        subHeading: `New employee trial periods are free`,
        subParagraph: `We allow our clients to try out candidates before making a final decision, so you can trust that the task will be completed on time and on budget.`
      },
      {
        count: `02`,
        subHeading: `Transparent code quality monitoring`,
        subParagraph: `You will not be charged extra for our professionals' workstations or equipment. You also receive access to over 50 real devices to test your app, ranging from smartphones to tablets.`
      },
      {
        count: `03`,
        subHeading: `Rental of equipment is included`,
        subParagraph: `You will not be charged extra for our professionals' workstations or equipment. You also receive access to over 50 real devices to test your app, ranging from smartphones to tablets.`
      },
      {
        count: `04`,
        subHeading: `Includes system administration`,
        subParagraph: `Don't worry about anything but the success of your project; we'll handle all of the administrative and IT support for you, including helping you set up effective communication, integrating project management tools, and more.`
      },
      {
        count: `05`,
        subHeading: `When necessary, tailoring Willben Group Private Limited and Company procedures`,
        subParagraph: `Our highly skilled personnel can not only rapidly and effortlessly integrate with your team, but also assist improve development procedures for optimal project productivity.`
      },
      {
        count: `06`,
        subHeading: `Unwanted resources are immediately replaced.`,
        subParagraph: `When it comes to selecting the finest individuals for our client’s needs, we are extremely meticulous. If a discrepancy does occur, we will promptly replace it with a suitable replacement.`
      },
    ],
    heading: `Why Willben`,
    aboutTech: [
      {
        subHeading: `Start with confidence..`,
        subParagraph: `Our goal is to help you launch quickly and make sure you’ll want to work with us again.`
      },
      {
        subHeading: `100% Transparency`,
        subParagraph: `Clear communication, flexible pricing, and full dedication to your success.`
      },
      {
        subHeading: `Cross-domain expertise`,
        subParagraph: `Willben portfolio holds various projects belonging to the most diverse industries, from healthcare to automotive, finance, and eCommerce.`
      },
      {
        subHeading: `Excellent Code Quality`,
        subParagraph: `We check the quality of our code at every step of development to ensure best results.`
      },
    ]
  }

}
