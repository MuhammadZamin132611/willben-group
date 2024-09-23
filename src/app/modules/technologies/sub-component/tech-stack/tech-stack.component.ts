import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  techStack:TechStack = {
    heading: `Tech Stack`,
    paragraph: `Our knowledge in React development outsourcing does not end there. Our talents and experience encompass practically every programming language, framework, and library, both those that have been around for a long time and others that have been launched recently by industry leaders like Google or Microsoft.`,
    techImages: [
      {
        logo: `../../../../../assets/javascript.svg`,
        techName: `JavaScript`
      },
      {
        logo: `../../../../../assets/react.svg`,
        techName: `React`
      },
      {
        logo: `../../../../../assets/typescript.png`,
        techName: `TypeScript`
      },
      {
        logo: `../../../../../assets/vue.svg`,
        techName: `Vue.Js`
      },
    ],
    aboutTech: {
      heading: `React development step by step`,
      aboutDetails: [
        {
          subHeading: `Write to Us`,
          subParagraph: `Tell us about your front-end development needs and we will take care of the rest.`
        },
        {
          subHeading: `Define requirements`,
          subParagraph: `We will talk through all the necessary details, identify all tech specs and requests.`
        },
        {
          subHeading: `Meet your team`,
          subParagraph: `We will handpick a development team that fits your needs best and start on your project at once.`
        },
        {
          subHeading: `Prepare to deploy`,
          subParagraph: `Your project will be delivered on time and within proper budget and systematic Implementation and will continue to prosper!`
        },
      ]
    }
  }

}

interface TechStack {
  heading: string;
  paragraph: string;
  techImages: ImageDetails[];
  aboutTech: AboutTech;
}
interface ImageDetails {
  logo: string;
  techName: string;
}

interface AboutTech {
  heading:string;
  aboutDetails:AboutDetails[];
}

interface AboutDetails {
  subHeading: string;
  subParagraph: string;
}