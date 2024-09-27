import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-ios',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './ios.component.html',
  styleUrl: './ios.component.scss'
})
export class IosComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Quick Launch, High-Quality Code.`,
    paragraph: `The Apple devices that are most widely used worldwide are the iPhone, iPad, and iMac. Numerous companies have created a plethora of iOS apps in response to their steadily rising popularity in order to keep up with the demand.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Extensive experience`,
        aboutParagraph: `Years of dependable iOS application development services with a solid track record of satisfied clients and successful results`
      },
      {
        count: '',
        aboutHeading: `Accomplished professionals`,
        aboutParagraph: `Skilled iOS application developers who guarantee competent solutions with strong programming abilities and deep domain knowledge.`
      },
      {
        count: '',
        aboutHeading: `Trusted partnerships`,
        aboutParagraph: `Many businesses around the world have shown faith in our abilities by entrusting us with the development and maintenance of their applications.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack`,
    paragraph: `One of the mainstays of our development framework library is iOS. Our skilled iOS engineers are prepared to provide complete solutions catered to your requirements, regardless of the type of project you have in mind—from a simple project to a complex enterprise suite with cross-platform capabilities.`,
    techImages: [
      {
        logo: `../../../../../assets/swift.svg`,
        techName: `Swift`
      },
      {
        logo: `../../../../../assets/androidlogo.jpg`,
        techName: `Android`
      },
      {
        logo: `../../../../../assets/Kotlin.png`,
        techName: `Kotlin`
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Reach out to us`,
          subParagraph: `Fill out the online contact form, providing as much information as possible about your needs.`
        },
        {
          subHeading: `Outline your goals`,
          subParagraph: `After connecting with you and discussing the request, your assigned personal manager will now obtain more details.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We carefully consider your request and provide you with a carefully selected list of candidates who best fit the position.`
        },
        {
          subHeading: `Get to work`,
          subParagraph: `Following the team meeting and approval, the development process is prepared for an exciting start!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Building iOS App`,
    techDescription: [
      {
        count: `01`,
        subHeading: `New employee trial periods are free`,
        subParagraph: `We provide our clients the ability to evaluate candidates prior to making a final decision, giving them peace of mind that the work will be completed on schedule and within their allocated budget.`
      },
      {
        count: `02`,
        subHeading: `Transparent code quality monitoring`,
        subParagraph: `The use of the workstations and equipment belonging to our professionals is provided without charge. Additionally, you get access to more than 50 real devices for comprehensive app testing, ranging from smartphones to tablets.`
      },
      {
        count: `03`,
        subHeading: `Rental of equipment is included`,
        subParagraph: `The use of our professionals' workstations and equipment will not result in additional fees. You will also have exclusive access to a large pool of over 50 real devices, including tablets and smartphones, for app testing.`
      },
      {
        count: `04`,
        subHeading: `Includes system administration`,
        subParagraph: `We'll take care of all administrative and IT support duties, so you can relax and concentrate entirely on the success of your project. This entails taking care of other necessities, integrating project management tools, and supporting the establishment of smooth communication.`
      },
      {
        count: `05`,
        subHeading: `When necessary, tailoring Willben Group Private Limited and Company procedures`,
        subParagraph: `Our highly qualified staff not only works in unison with yours but also adds to the improvement of development procedures, guaranteeing maximum project output.`
      },
      {
        count: `06`,
        subHeading: `Unwanted resources are immediately replaced.`,
        subParagraph: `Our process is incredibly careful when it comes to choosing people who are suited to our clients' needs. If there is ever a discrepancy, we promise to replace it as soon as possible with one that is appropriate and qualified. Our first goal is still making sure you are happy with our team.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Start with confidence..`,
        subParagraph: `Our primary goal is to facilitate a swift launch and ensure that your experience with us will prompt a desire for future collaboration.`
      },
      {
        subHeading: `100% Transparency`,
        subParagraph: `Transparent communication, adaptable pricing, and unwavering dedication to ensure your resounding success.`
      },
      {
        subHeading: `Cross-domain expertise`,
        subParagraph: `Willben's extensive portfolio showcases an array of projects spanning diverse industries, including healthcare, automotive, finance, and eCommerce.`
      },
      {
        subHeading: `Excellent Code Quality`,
        subParagraph: `We meticulously assess the code's quality at each development stage to guarantee optimal results.`
      },
    ]
  }

}
