import { Component } from '@angular/core';
import { ExplainPlatformComponent } from '../../sub-component/explain-platform/explain-platform.component';
import { RouterLink } from '@angular/router';
import { TechStackComponent } from '../../sub-component/tech-stack/tech-stack.component';
import { TechBenefitsComponent } from '../../sub-component/tech-benefits/tech-benefits.component';

@Component({
  selector: 'app-node-js',
  standalone: true,
  imports: [RouterLink, ExplainPlatformComponent, TechStackComponent, TechBenefitsComponent],
  templateUrl: './node-js.component.html',
  styleUrl: './node-js.component.scss'
})
export class NodeJsComponent {

  explainPlatform = {
    image: `../../../../../assets/happyTarget.png`,
    heding: `Easy Scalability. Faster Time-to-market.`,
    paragraph: `Node.js is a JavaScript framework that is very light. To speed up data processing, this event-based design uses Javascript on both the server and client sides. Our Node.js developers assist with the visioning, design, and development of Node.js web applications for business value and excellence across many disciplines.`,
    aboutTechnologies: [
      {
        count: '',
        aboutHeading: `Skilled Developers`,
        aboutParagraph: `Whether you hire one or more Node.js developers, we guarantee that you will be working with Middle and Senior level experts only.`
      },
      {
        count: '',
        aboutHeading: `Node.js Projects`,
        aboutParagraph: `Our Node.js development outsourcing has filled our portfolio with lots of projects worthy of your attention.`
      },
      {
        count: '',
        aboutHeading: `Years of Experience`,
        aboutParagraph: `Our Agile approach, years of experience, and mature processes allow us to handle Node.js projects of any complexity and scale.`
      },
    ]
  }

  techStack = {
    heading: `Our Technology Expertise`,
    paragraph: `The expert developers at Senwell Group Private Limited can provide more than just Node.js development outsourcing. We have the ability to create high-quality software utilizing a variety of modern technologies, programming languages, and tools.`,
    techImages: [
      {
        logo: `../../../../../assets/cSharp.svg`,
        techName: `C#`
      },
      {
        logo: `../../../../../assets/jquery.png`,
        techName: `Jquery`
      },
      {
        logo: `../../../../../assets/nodejs.svg`,
        techName: `NodeJs`
      },
      {
        logo: `../../../../../assets/dotnet.svg`,
        techName: `.Net`
      },
      {
        logo: `../../../../../assets/postman.png`,
        techName: `Postman`
      },
      {
        logo: `../../../../../assets/java.svg`,
        techName: `Java`
      },
    ],
    aboutTech: {
      heading: `How to Get Started`,
      aboutDetails: [
        {
          subHeading: `Reach out to us`,
          subParagraph: `Fill our contact form, tell us about your project, and we’ll be in touch within one business day.`
        },
        {
          subHeading: `Outline your goals`,
          subParagraph: `Your personal manager will provide a quote based on your project requirements.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We will handpick the best suitable candidates for your Node.js development project.`
        },
        {
          subHeading: `Get to work`,
          subParagraph: `Now that your team is formed, let’s turn your ideas into a successful Node.js solution!`
        },
      ]
    }
  }

  techBenefits = {
    techName: `Benefits of Node js`,
    techDescription: [
      {
        count: `01`,
        subHeading: `New Employee Trial Periods`,
        subParagraph: `Before making a final decision, we provide our clients the opportunity to practise with the prospects. We want you to have faith in our ability to complete the project on time and on budget.`
      },
      {
        count: `02`,
        subHeading: `Monitoring of Transparent Code`,
        subParagraph: `When you hire Willben Group Private Limited, you have access to our unique tools, which give important code quality metrics to assist your project in standardising and maintaining code quality.`
      },
      {
        count: `03`,
        subHeading: `Rental of equipment is included`,
        subParagraph: `You will not be charged extra for our professionals' workstations or equipment. You also receive access to over 50 real devices to test your app, ranging from smartphones to tablets.`
      },
      {
        count: `04`,
        subHeading: `Workflows and Processes That Are Flexible`,
        subParagraph: `Our highly skilled personnel can not only rapidly and effortlessly integrate with your team, but also assist improve development procedures for optimal project productivity.`
      },
      {
        count: `05`,
        subHeading: `Includes system administration`,
        subParagraph: `Don't worry about anything but the success of your project; we'll handle all administrative and IT assistance, including helping you set up servers, integrate project management software, and create effective communication, among other things.`
      },
      {
        count: `06`,
        subHeading: `Resource Replacement in a Hurry`,
        subParagraph: `When it comes to selecting the finest individuals for our client’s needs, we are extremely meticulous. If a discrepancy does occur, we will promptly replace it with a suitable replacement.`
      },
    ],
    heading: `Why Choose Us`,
    aboutTech: [
      {
        subHeading: `Start with Confidence.`,
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
        subParagraph: `Need services beyond Back-End Development? We will have you covered.`
      },
    ]
  }

}
