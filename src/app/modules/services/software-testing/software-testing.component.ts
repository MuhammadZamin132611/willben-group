import { Component } from '@angular/core';
import { SoftwareProductDevelopmentComponent } from "../software-product-development/software-product-development.component";
import { ServicesTopPartComponent } from "../subComponent/services-top-part/services-top-part.component";
import { SingleCardServiceComponent } from '../subComponent/single-card-service/single-card-service.component';
import { OurBlogComponent } from '../../blogs/blog/our-blog/our-blog.component';

@Component({
  selector: 'app-software-testing',
  standalone: true,
  imports: [ServicesTopPartComponent, SingleCardServiceComponent, OurBlogComponent],
  templateUrl: './software-testing.component.html',
  styleUrl: './software-testing.component.scss'
})
export class SoftwareTestingComponent {
  title:string='Insights'
  serviceTopPart = {
    heading: 'Software Testing & QA Services from Willben Group Private Limited',
    paragraph: 'Experience next-gen software testing and QA services with Willben Group Private Limited that improve your software development lifecycle while boosting code deployment and cost-effectiveness. As one of the leading software testing companies, Willben Group Private Limited goal is to develop and create custom solutions that assist your exact business goals and operational processes. Our quality assurance approach focuses on preventing and improving software product quality from the beginning stage of the development process.',
    topCard: [
      {
        cardHeading: 'Quality Assurance Consulting',
        cardImage: '../../../../assets/qualityassurance.png',
        cardParagrapg: `We are a full-fledged and top-tier QA and software testing services company specializing in serving and solving the most complex QA needs to bring you tangible business value. Our professional software Quality assurance consulting experts drive quality across the entire software development lifecycle to streamline your QA processes, address QA bottlenecks, and optimize QA costs.`,
      },
      {
        cardHeading: 'Digital Assurance',
        cardImage: '../../../../assets/digitalassurance.png',
        cardParagrapg: `The digital assurance testing professionals at Willben Group Private Limited offer a solid platform to support our clients as they launch their digital transformation initiatives. We do thorough testing throughout your whole digital value chain, including web portals, content, digital assets, and web analytics, as well as the full digital ecosystem, which includes cloud, mobility, big data, and connected devices.`,
      },
      {
        cardHeading: 'Digital Engineering',
        cardImage: '../../../../assets/digitalEngineering.png',
        cardParagrapg: `We ensure a methodical, goal-oriented strategy that integrates and automates the entire environment for smooth operation. Our team incorporates a thorough strategy for digital assurance and testing that offers adaptable, reusable resources and tools to boost the general effectiveness of quality assurance and testing procedures.`,
      },
      {
        cardHeading: 'Managed Testing Services',
        cardImage: '../../../../assets/managedTesting.png',
        cardParagrapg: `Transform your testing to always assure excellent quality while remaining within an acceptable testing time and price. In order to assist you in overcoming significant testing problems and achieving ideal results, we fully assume responsibility for your QA.`,
      },
      {
        cardHeading: 'Test Automation Services',
        cardImage: '../../../../assets/testAutomation.png',
        cardParagrapg: `A specialized test automation firm helps businesses accelerate their testing operations by utilizing scalable test automation frameworks and established automation procedures. Your software product will be released more quickly, you'll achieve greater quality, and you'll cut down on testing time dramatically with the aid of our standard testing models.`,
      },
      {
        cardHeading: 'QA Outsourcing',
        cardImage: '../../../../assets/productArchecture.png',
        cardParagrapg: `For dependable, safe, and user-friendly tools that can expedite your software product testing process and increase productivity, turn to Willben Group Private Limited for your QA needs. Our outsourcing services for software testing include establishing QA strategy, creating test cases and scripts, setting up test environments, describing faults, and providing software testing services across many industrial sectors.`,
      },
    ],
  };

  singlaCard = {
    cardHeading: 'Software Testing Company',
    cardImage: '../../../../assets/qatesting.webp',
    cardParagrapg: [
      {
        paragraph: `Invest in Next-Gen applications for your company by using the best software testing techniques and resources. Our creative and progressive method minimizes bugs, cuts down on overall cycle time, and eliminates errors. We provide a full range of manual and automated testing services that follow standard quality assurance procedures and best practices, all while keeping the unique requirements of our clients front and center. High-quality QA testing is carried out by our committed group of creative QA engineers to deliver dependable, scalable, and sturdy software solutions.`
      },
    ]
  };

  serviceTopPart1 = {
    heading: 'Software Testing and Custom Quality Assurance Solutions',
    paragraph: 'We guarantee that the software solutions you receive will have improved performance, maximum scalability, expedited test coverage, excellent dependability, and top-notch quality. We provide the ideal combination of automated and manual testing services while following the finest procedures and standards to guarantee quality',
    topCard: [
      {
        cardHeading: 'Functional Testing Services',
        cardImage: '../../../../assets/functionaltesting.png',
        cardParagrapg: `To assure app verification and validation for multinational corporations, we provide automated functional testing services for mobile, web, and enterprise apps. Through software functional testing services, we evaluate programs against predetermined criteria that ensure strong functioning and end-user approval`,
      },
      {
        cardHeading: 'Performance Testing Services',
        cardImage: '../../../../assets/performancetesting.png',
        cardParagrapg: `To assist you with end-to-end, cloud-based testing solutions and develop future-proof apps with high scalability, responsiveness, and availability, our skilled engineering team offers extensive performance testing services`,
      },
      {
        cardHeading: 'Security Testing Services',
        cardImage: '../../../../assets/securitytesting.png',
        cardParagrapg: `Your apps' vulnerabilities are found by Willben Group Private Limited' web application penetration and security testing expertise, which also ensures risk mitigation, software code benchmarking, and better software quality assurance (QA), as well as complete brand protection and customer retention.`,
      },
      {
        cardHeading: 'Mobile App Testing Services',
        cardImage: '../../../../assets/mobileapptesting.png',
        cardParagrapg: `With automated mobile testing and cross-platform testing services from top mobile testing professionals from Willben Group Private Limited, secure mobile UI testing can be done to validate best-in-class user experience.`,
      },
      {
        cardHeading: 'Compatibility Testing Services',
        cardImage: '../../../../assets/reactNavtive.png',
        cardParagrapg: `With our thorough and automatic compatibility testing services, you can enable your strong apps to function without any issues across various operating systems, browsers, and mobile devices. Our QA software testers make sure your product runs well under the broad set of technical requirements in a comprehensive compatibility lab.`,
      },
      {
        cardHeading: 'Accessibility Testing Services',
        cardImage: '../../../../assets/uiuxDesign.png',
        cardParagrapg: `With our high competence and thorough understanding of accessibility testing rules, we adhere to established accessibility procedures to provide the application with complete accessibility testing services assuring equitable access to everyone.`,
      },
    ],
  };
}
