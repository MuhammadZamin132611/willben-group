import { Component } from '@angular/core';
import { ServicesTopPartComponent } from '../subComponent/services-top-part/services-top-part.component';
import { SingleCardServiceComponent } from '../subComponent/single-card-service/single-card-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uiux-design',
  standalone: true,
  imports: [ServicesTopPartComponent, SingleCardServiceComponent, CommonModule],
  templateUrl: './uiux-design.component.html',
  styleUrl: './uiux-design.component.scss'
})
export class UiuxDesignComponent {

  serviceTopPart = {
    heading: 'UI & UX Development Services',
    paragraph: 'We brainstorm, plan, and suggest the digital design ideas for applications on the web and mobile devices. Our approach, which is based on a thorough understanding of the market, combines content with impressive and functionally active designs and the appropriate technologies to create memorable brand names for businesses.',
    topCard: [
      {
        cardHeading: 'Prototyping',
        cardImage: '../../../../assets/prototyping1.png',
        cardParagrapg: `Prototyping is the first step in conceptualizing the page structure. Here, we optimize the layout of the page, showcasing carefully planned structural alignments and arrangements that make the user's digital experience responsive and easy to use.`,
      },
      {
        cardHeading: 'Information Architecture design',
        cardImage: '../../../../assets/informationArchecture.png',
        cardParagrapg: `Organise, structure and label the content according to the theme of the business on web or on mobile apps. After deep analysis of customer's needs, resolve issues of system structure, content management and navigation and recommend best fit as per the business goals.`,
      },
      {
        cardHeading: 'User Experience (UX) Development',
        cardImage: '../../../../assets/userExperience.png',
        cardParagrapg: 'a comprehensive strategy in which every option and feature is considered in order to track end-user interaction and add new improvements. We conduct thorough analyses of key features and use visual rendering as necessary to achieve business objectives.',
      },
      {
        cardHeading: 'User Interface (UI) Development',
        cardImage: '../../../../assets/userInterface.png',
        cardParagrapg: 'Increase revenue and boost company profitability by drawing in more clients with visually appealing application designs. Following careful consideration of information architecture, we transform your concepts into fluid, useful designs.',
      },
      {
        cardHeading: 'Wireframing',
        cardImage: '../../../../assets/wireframing.png',
        cardParagrapg: 'The information architecture serves as a blueprint for the final design, and the next stage in the design process is to visualize the final product and create a wireframe. Utilizing the newest digital resources, we provide wireframing services to present each piece of information in a unique and eye-catching way.',
      },
      {
        cardHeading: 'Usability Testing',
        cardImage: '../../../../assets/usabilityTesting.png',
        cardParagrapg: 'Testing a product to determine its acceptance in the marketplace based on specific scenarios and usability tests. We offer a comprehensive set of usability testing like screen resolution tests, compatibility testing, crowd testing and similar tests within faster lifecycle and at accessible prices.',
      },
    ],
  };

  singlaCard = {
    cardHeading: 'UI/UX Design Services',
    cardImage: '../../../../assets/uiuxdesignServices.png',
    cardParagrapg: [
      {
        paragraph: `By providing UI and UX development services that combine creativity, technology, and personalization, you can explore cutting-edge digital experiences. We create engaging user experiences that have a big impact on conversion rates, brand value, and customer satisfaction rates. Their success graphs have been paved with our expertise and experience in UX research and design using the most appropriate tools, technologies, and services. For strategic business growth, our team of talented creative designers understands how to design concepts and produces outstanding UI and UX designs.`
      },
    ]
  };


  title: string = `Insights`;

  languageAndTechnologies: boolean = true;
  wireframeAndPrototype: boolean = false;
  uiuxvisualDesign: boolean = false;
  collaboration: boolean = false;

  viewLanguageAndTechnologies = () => {
    this.languageAndTechnologies = true;
    this.wireframeAndPrototype = false;
    this.uiuxvisualDesign = false;
    this.collaboration = false
  }

  viewWireframeAndPrototype = () => {
    this.languageAndTechnologies = false;
    this.wireframeAndPrototype = true;
    this.uiuxvisualDesign = false;
    this.collaboration = false;
  }

  viewUiuxvisualDesign = () => {
    this.languageAndTechnologies = false;
    this.wireframeAndPrototype = false;
    this.uiuxvisualDesign = true;
    this.collaboration = false;
  }

  viewCollaboration = () => {
    this.languageAndTechnologies = false;
    this.wireframeAndPrototype = false;
    this.uiuxvisualDesign = false;
    this.collaboration = true
  }

  languageAndTechnologiesImages: Images = {
    images: [
      {
        image: `../../../../assets/darkbootstrap.svg`,
        imageName: 'bootstrap'
      },
      {
        image: `../../../../assets/darkhtml.svg`,
        imageName: 'html'
      },
      {
        image: `../../../../assets/darkcss.svg`,
        imageName: 'css'
      },
      {
        image: `../../../../assets/darkjQuery.svg`,
        imageName: 'jQuery'
      },
    ]
  };


  wireframeAndPrototypeImages: Images = {
    images: [
      {
        image: `../../../../assets/darkinVision.svg`,
        imageName: 'inVision'
      },
      {
        image: `../../../../assets/adobeXD.svg`,
        imageName: 'adobeXD'
      },
      {
        image: `../../../../assets/googleWebDesigner.svg`,
        imageName: 'googleWebDesigner'
      },
      {
        image: `../../../../assets/sketch.svg`,
        imageName: 'sketch'
      },
      {
        image: `../../../../assets/figma.svg`,
        imageName: 'figma'
      },
    ]
  };

  uiuxvisualDesignImages: Images = {
    images: [
      {
        image: `../../../../assets/photoshop.svg`,
        imageName: 'photoshop'
      },
      {
        image: `../../../../assets/inDesign.png`,
        imageName: 'inDesign'
      },
      {
        image: `../../../../assets/lllustrator.svg`,
        imageName: 'lllustrator'
      },
      {
        image: `../../../../assets/sketch.svg`,
        imageName: 'sketch'
      },
      {
        image: `../../../../assets/figma.svg`,
        imageName: 'figma'
      },
    ]
  };

  collaborationImages: Images = {
    images: [
      {
        image: `../../../../assets/zepline.svg`,
        imageName: 'zepline'
      },
      {
        image: `../../../../assets/darkinVision.svg`,
        imageName: 'inVision'
      },
      {
        image: `../../../../assets/adobeCloud.svg`,
        imageName: 'adobeCloud'
      },
    ]
  };


}

interface Images {
  images: Image[];
}

interface Image {
  image: string;
  imageName: string;
}
