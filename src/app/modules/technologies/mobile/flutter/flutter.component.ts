import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-flutter',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './flutter.component.html',
  styleUrl: './flutter.component.scss'
})
export class FlutterComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Swift Deployment, Exemplary Code Quality.`,
    paragraph: `Flutter is a programming language that primarily uses Dart to present customizable widgets. Senwell Group Private Limited offers a wide range of state-of-the-art app development services and is a leading Flutter development company. Using the unique features that Flutter provides, we quickly and skillfully create native interfaces that are of the highest caliber on all platforms.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Extensive experience`,
        aboutParagraph: `Several years of solid experience developing Flutter apps, a solid clientele, and fruitful outcomes.`
      },
      {
        count: '',
        aboutHeading: `Accomplished professionals`,
        aboutParagraph: `Seasoned Flutter application engineers who guarantee excellence in every project with their strong programming abilities and broad knowledge across a variety of domains.`
      },
      {
        count: '',
        aboutHeading: `Trusted partnerships`,
        aboutParagraph: `Many businesses all over the world have given us the development and management of their applications, demonstrating their faith in our abilities.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack`,
    paragraph: `One of the main components of our development framework library is Flutter. Our skilled Flutter engineers are prepared to provide solutions that are specifically designed to meet your needs. Regardless of how simple or complicated the project is, we are prepared to realize your vision.`,
    techImages: [
      {
        logo: ``,
        techName: ``
      },
      {
        logo: ``,
        techName: ``
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Reach out to us`,
          subParagraph: `Fill out the online form on our website, providing as much information as possible about your preferences and needs.`
        },
        {
          subHeading: `Outline your goals`,
          subParagraph: `After our lengthy discussion and careful examination of your request, your assigned personal manager will now compile any more relevant data.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We carefully consider your request and provide you with a carefully selected list of candidates who best fit the job description.`
        },
        {
          subHeading: `Get to work`,
          subParagraph: `After the team meeting and unanimous approval, the development process is about to get underway with great excitement!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Benefits of Flutter App`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Free trial periods for new employees.`,
        subParagraph: `We provide our clients with the opportunity to trial potential candidates before they decide on one, so you can be confident that we will successfully complete the project on time and within the allocated budget.`
      },
      {
        count: `02`,
        subHeading: `Transparent monitoring of code quality`,
        subParagraph: `When you work with Willben Group Private Limited, you get access to our proprietary toolkit, which includes crucial metrics for code quality that will help your project maintain and develop coding standards.`
      },
      {
        count: `03`,
        subHeading: `Equipment rental included`,
        subParagraph: `The use of our professionals' workstations and equipment is provided without additional cost. You also get access to more than 50 real devices for app testing, which includes tablets and smartphones.`
      },
      {
        count: `04`,
        subHeading: `System management incorporated.`,
        subParagraph: `You can relax knowing that we will take care of all administrative and IT support, including helping to set up effective channels of communication and incorporating cutting-edge project management software, so your entire focus can be on the success of your project.`
      },
      {
        count: `05`,
        subHeading: `Company processes when required`,
        subParagraph: `Our highly qualified staff members quickly and easily become a part of your team while also improving development processes to guarantee the highest level of project productivity.`
      },
      {
        count: `06`,
        subHeading: `Unwanted resources are immediately replaced.`,
        subParagraph: `In the meticulous process of selecting the most exceptional individuals for our client's requirements, we exercise utmost diligence. Should any discrepancy arise, we will swiftly replace it with a qualified alternative.`
      },
    ],
    heading: ``,
    aboutTech: [
      {
        subHeading: ``,
        subParagraph: ``
      }
    ]
  }

}
