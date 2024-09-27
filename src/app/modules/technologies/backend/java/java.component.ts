import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './java.component.html',
  styleUrl: './java.component.scss'
})
export class JavaComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `We focus our knowledge on the problems facing your company.`,
    paragraph: `Willben Group Private Limited offers top-notch Java development services. We create scalable and reliable Java software to solve business problems and offer top-notch DevOps services that maximize benefits for a range of industry clients.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Engineers`,
        aboutParagraph: `Some of the most talented and experienced Java developers in Eastern Europe work for our company.`
      },
      {
        count: '',
        aboutHeading: `Projects`,
        aboutParagraph: `Our portfolio is full of projects that deserve your consideration thanks to Java development outsourcing.`
      },
      {
        count: '',
        aboutHeading: `Years of Experience`,
        aboutParagraph: `Despite our extensive experience, we still have a strong enthusiasm for cutting-edge tools like the Spring Boot framework.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack`,
    paragraph: `We are experts in many fields and state-of-the-art technologies, and we can demonstrate our knowledge of Java development. Our goal with every project is to provide significant value to our clients as well as the industry at large. This demonstrates our steadfast dedication to creating code that is as clean as possible and attaining peak performance.`,
    techImages: [
      {
        logo: `../../../../../assets/java.svg`,
        techName: `Java`
      },
      {
        logo: `../../../../../assets/springboot.png`,
        techName: `SprinBoot`
      },
      {
        logo: `../../../../../assets/hibernet.png`,
        techName: `Hibernate`
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Get to know us`,
          subParagraph: `Complete this brief form to let us know about your needs for software development.`
        },
        {
          subHeading: `Set an objective`,
          subParagraph: `Design and implement a scalable Java app meeting specified requirements, ensuring optimal performance and lifecycle maintainability.`
        },
        {
          subHeading: `Form a team`,
          subParagraph: `We will assemble a dedicated team of skilled Java developers, committed to working full-time on your project`
        },
        {
          subHeading: `Start working`,
          subParagraph: `Once you've met and endorsed the team, the development process is poised for a fresh start!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `How to Get Started`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Reduced Time-To-Market`,
        subParagraph: `Boost the distribution and use of resources to expedite development cycles and bring your product or service to market more quickly.`
      },
      {
        count: `02`,
        subHeading: `Easy App Designing, Implementation & Deployment`,
        subParagraph: `Provide an aesthetically pleasing and intuitive user interface that makes interacting with it easier and improves the user experience in general.`
      },
      {
        count: `03`,
        subHeading: `Easy Integration with Distributed System Operation`,
        subParagraph: `Implement a microservices architecture to break down the application into smaller, independent services, enabling seamless integration with distributed systems.`
      },
      {
        count: `04`,
        subHeading: `Cross Platform Operation with Platform Independence`,
        subParagraph: `Embrace the Java philosophy of WORA to ensure your application can run seamlessly across diverse platforms without modification.`
      },
      {
        count: `05`,
        subHeading: `Multithreading Benefits`,
        subParagraph: `Enhance user experience by separating time-consuming tasks from the main thread, ensuring the application remains responsive and interactive.`
      },
      {
        count: `06`,
        subHeading: `Inexpensive App Development `,
        subParagraph: `Utilize cost-effective cloud services for hosting, storage, and computing, allowing you to pay for only the resources you use and eliminating the need for significant upfront investments.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Quick start`,
        subParagraph: `It typically only takes a few days to begin the collaboration because we don't use bureaucracy in our processes.`
      },
      {
        subHeading: `Fair deal`,
        subParagraph: `You are the only one who can determine how involved in the development you want to be, and all of our operations are completely transparent.`
      },
      {
        subHeading: `Flawless code`,
        subParagraph: `We are passionate about software testing just as much as we are about coding, so you should have high standards for our QA services.`
      },
      {
        subHeading: `Industry experts`,
        subParagraph: `Don't worry if your project becomes more technically complex over time—your Willben Group Private Limited team will adapt accordingly.`
      },
    ]
  }

}
