import { Component } from '@angular/core';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';

@Component({
  selector: 'app-nextjs',
  standalone: true,
  imports: [ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './nextjs.component.html',
  styleUrl: './nextjs.component.scss'
})
export class NextjsComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Seamless Performance. Exceptional User Experience.`,
    paragraph: `Willben Group Private Limited excels in providing cutting-edge Next.js development services, delivering scalable and reliable applications tailored to solve diverse business challenges. Our expertise extends to offering exceptional DevOps services, ensuring optimal benefits for clients across a wide array of industries.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Engineers`,
        aboutParagraph: `Engage with us for a skilled Next.js team—middle and senior engineers committed to quality in every development facet.`
      },
      {
        count: '',
        aboutHeading: `Next js Projects`,
        aboutParagraph: `Explore our portfolio showcasing Next.js development excellence. Witness our dedication to impactful solutions and outsourcing service quality.`
      },
      {
        count: '',
        aboutHeading: `Years of Experience`,
        aboutParagraph: `Despite experience, our commitment to innovation is evident in enthusiastic Next.js support. Staying updated, we ensure projects leverage the latest tech, fostering efficiency—your reliable development partner.`
      },
    ]
  }

  techStack = {
    heading: `Tech Stack `,
    paragraph: `Proficient across diverse domains and cutting-edge technologies, we exhibit expertise in Next.js development. Our paramount goal in every assignment is to deliver substantial value to clients and the industry. This emphasizes our unwavering commitment to crafting immaculate code for optimal performance, serving as a testament to our dedication to excellence in each project`,
    techImages: [
      {
        logo: `../../../../assets/NextjsNew.png`,
        techName: `Next Js`
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
          subParagraph: `Share your front-end needs; our adept team will handle the rest. We specialize in crafting tailored solutions to elevate your digital presence.`
        },
        {
          subHeading: `Set an objective`,
          subParagraph: `Design a scalable Next.js software for optimal efficiency and long-term upkeep. Industry standards are given top priority by our team, who guarantee efficiency from concept to exceed your expectations.`
        },
        {
          subHeading: `Form a team`,
          subParagraph: `We put together a devoted group of knowledgeable Next.js developers who are ready to work on your project full-time.`
        },
        {
          subHeading: `Start working`,
          subParagraph: `Once you've met and approved the team, the development process is poised for a fresh start!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Benefits of Next js`,
    techDescription: [
      {
        count: `01`,
        subHeading: `SEO-Friendly Architecture`,
        subParagraph: `Optimize your search engine rankings by using static site generation.`
      },
      {
        count: `02`,
        subHeading: `Improved Performance`,
        subParagraph: `Utilize server-side rendering to improve performance and speed up page loads.`
      },
      {
        count: `03`,
        subHeading: `TypeScript Support`,
        subParagraph: `Gain improved code quality and maintainability with TypeScript integration.`
      },
      {
        count: `04`,
        subHeading: `Flexibility in Gathering Data`,
        subParagraph: `provides a variety of ways to retrieve data, meeting the requirements of various projects.`
      },
      {
        count: `05`,
        subHeading: `Seamless Integration with APIs`,
        subParagraph: `Integrate with backend services and APIs with ease to enable seamless communication.`
      },
      {
        count: `06`,
        subHeading: `Integration of Vercel Deployment`,
        subParagraph: `Simple hosting and deployment combined with a smooth integration with the Vercel platform.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Quick start`,
        subParagraph: `Our collaboration typically begins within a few days as we navigate around bureaucratic procedures in our workflows.`
      },
      {
        subHeading: `Fair deal`,
        subParagraph: `Your level of involvement in the development is entirely up to you, and we maintain complete transparency in all of our operations.`
      },
      {
        subHeading: `Flawless code`,
        subParagraph: `We uphold coding and software testing to rigorous standards, driven by a shared passion for both. Your expectations for quality assurance align with our unwavering dedication.`
      },
      {
        subHeading: `Industry experts`,
        subParagraph: `Rest assured, as your project advances in technical complexity over time, the Willben Group Private Limited team will adeptly adapt to meet the evolving challenges`
      },
    ]
  }

}
