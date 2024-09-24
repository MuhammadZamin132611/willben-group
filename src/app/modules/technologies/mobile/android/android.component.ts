import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-android',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './android.component.html',
  styleUrl: './android.component.scss'
})
export class AndroidComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Quick Launch, High-Quality Code.`,
    paragraph: `Since almost half of all smartphone users use Android apps, the Android platform is very important for creating any kind of mobile application. Senwell Group Private Limited is a reputable Android app development business committed to making your online experience better by providing engaging mobile applications.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Extensive experience`,
        aboutParagraph: `Many years of dependable Android app development experience, a strong portfolio of satisfied clients, and positive results.`
      },
      {
        count: '',
        aboutHeading: `Accomplished professionals`,
        aboutParagraph: `Strong programming skills and a wide range of domain knowledge are attributes of competent Android application developers, who guarantee competent solutions.`
      },
      {
        count: '',
        aboutHeading: `Trusted partnerships`,
        aboutParagraph: `Many companies throughout the world have shown their faith in our abilities by giving us the responsibility for developing and managing their applications.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack`,
    paragraph: `Android is a key component of our development framework library. Our skilled Android engineers are prepared to provide complete solutions that are customized to your particular needs. We are prepared to realize your vision, no matter how complex the project or how simple it is. We offer cross-platform capabilities for our enterprise suite.`,
    techImages: [
      {
        logo: `../../../../../assets/androidlogo.jpg`,
        techName: `Android`
      },
      {
        logo: `../../../../../assets/Kotlin.png`,
        techName: `Kotlin`
      },
      {
        logo: `../../../../../assets/java.svg`,
        techName: `Java`
      },
      {
        logo: `../../../../../assets/ionic.svg`,
        techName: `Ionic`
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Reach out to us`,
          subParagraph: `Fill out the online form, providing as much information as possible about what you need.`
        },
        {
          subHeading: `Outline your goals`,
          subParagraph: `After our conversation and in-depth review of your request, your personal manager will now collect more information.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We carefully consider your request and provide you with a carefully selected list of candidates who have been carefully selected to best fit the role.`
        },
        {
          subHeading: `Get to work`,
          subParagraph: `The development process is about to get underway with great excitement following the team meeting and unanimous approval!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Benefits Android App`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Free trial periods for new employees.`,
        subParagraph: `We give our clients the opportunity to interview candidates in advance of making a final decision, giving them peace of mind that the work will be finished on schedule and within the allocated budget.`
      },
      {
        count: `02`,
        subHeading: `Transparent monitoring of code quality`,
        subParagraph: `Engaging Willben Group Private Limited gives you access to our unique tools, which offer crucial code quality metrics to help your project standardize and continuously maintain ideal standards for code quality.`
      },
      {
        count: `03`,
        subHeading: `Equipment rental included`,
        subParagraph: `Using the workstations and equipment of our professionals is not subject to any additional fees. You also get access to more than 51 real devices for comprehensive app testing, ranging from tablets to smartphones.`
      },
      {
        count: `04`,
        subHeading: `System management incorporated.`,
        subParagraph: `We'll take care of all administrative and IT support duties, including helping you set up efficient communication channels and incorporate state-of-the-art project management tools, so you can relax and concentrate entirely on the success of your project.`
      },
      {
        count: `05`,
        subHeading: `Company processes when required`,
        subParagraph: `Our highly qualified staff can work quickly and easily with your team to improve development processes for maximum project productivity.`
      },
      {
        count: `06`,
        subHeading: `Unwanted resources are immediately replaced.`,
        subParagraph: `We take great care when choosing people for our clients. In the event of inconsistencies, a prompt and appropriate substitute is ensured.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Start with confidence..`,
        subParagraph: `Our main objective is to expedite the launch and make sure that working with us will make you want to work with us again in the future.`
      },
      {
        subHeading: `100% Transparency`,
        subParagraph: `Open communication, flexible payment options, and unwavering commitment to guarantee your triumphant achievement.`
      },
      {
        subHeading: `Excellent Code Quality`,
        subParagraph: `In addition to QA, we guarantee that your code is clear and devoid of technical debt.`
      },
      {
        subHeading: `Cross-domain expertise`,
        subParagraph: `We are confident and incredibly adept at handling any challenge.`
      },
    ]
  }

}
