import { Component } from '@angular/core';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-dot-net',
  standalone: true,
  imports: [ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './dot-net.component.html',
  styleUrl: './dot-net.component.scss'
})
export class DotNetComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `We target our expertise at your business issues.`,
    paragraph: `Willben solution is a global provider of high-quality and affordable .NET development services. Our dedicated .NET experts will adapt to your exact requirements, giving top-quality .NET development services, based on their years of expertise in numerous sectors.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Engineers`,
        aboutParagraph: `Whether you hire one or more .Net developers, we guarantee that you will be working with Middle and Senior level experts only.`
      },
      {
        count: '',
        aboutHeading: ` Projects`,
        aboutParagraph: `Our portfolio is a solid demonstration of how we turn the needs of our clients into digital solutions.`
      },
      {
        count: '',
        aboutHeading: `Years of Experience`,
        aboutParagraph: `Having spent over a decade on the IT market, we understand every nuance of software development.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack `,
    paragraph: `We are experts in a variety of fields and technologies, including.NET development. Every project we work on is focused on adding value to our clients and the industry as a whole. This explains our desire for the cleanest code possible and for the best possible performance.`,
    techImages: [
      {
        logo: `../../../../../assets/dotnet.svg`,
        techName: `.Net`
      },
      {
        logo: `../../../../../assets/cSharp.svg`,
        techName: `C#`
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Get to know us`,
          subParagraph: `Fill in a quick form so we can reach out to you and discuss your software development needs.`
        },
        {
          subHeading: `Set an objective`,
          subParagraph: `A manager assigned to your project will help you define long-term goals for your software.`
        },
        {
          subHeading: `Form a team`,
          subParagraph: `We’ll gather the most suitable .NET developers to work full-time on your project.`
        },
        {
          subHeading: `Start working`,
          subParagraph: `After you’ve met and approved the team, the development process is all set for the new beginning!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Benefits of .NET`,
    techDescription: [
      {
        count: `01`,
        subHeading: `Microsoft certification`,
        subParagraph: `Willben Group Private Limited is a Microsoft-certified partner, which means that all of the our.NET projects receive direct Microsoft technical support.`
      },
      {
        count: `02`,
        subHeading: `Transparency in business`,
        subParagraph: `From the beginning, you have unrestricted access to the outcomes of our efforts on your project.`
      },
      {
        count: `03`,
        subHeading: `Workflow that is adaptable`,
        subParagraph: `When we set up our technical cooperation, we'll tailor our operations to your schedule and goals.`
      },
      {
        count: `04`,
        subHeading: `Quality comes first.`,
        subParagraph: `We test apps in circumstances that most developers do not expect to occur since we are quality-conscious.`
      },
      {
        count: `05`,
        subHeading: `Complete coverage`,
        subParagraph: `System administration, equipment, and human resource management are all taken care of for you.`
      },
      {
        count: `06`,
        subHeading: `Lifetime updates and support`,
        subParagraph: `Our job does not end with coding; we will continue to ensure that your product is current and functional`
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
