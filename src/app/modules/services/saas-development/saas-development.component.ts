import { Component } from '@angular/core';
import { ServicesTopPartComponent } from "../subComponent/services-top-part/services-top-part.component";
import { SingleCardServiceComponent } from "../subComponent/single-card-service/single-card-service.component";
import { OurBlogComponent } from '../../blogs/blog/our-blog/our-blog.component';
import { LeadingMultinationalClientsComponent } from "../subComponent/leading-multinational-clients/leading-multinational-clients.component";
import { TechnologiesPlatformComponent } from "../subComponent/technologies-platform/technologies-platform.component";

@Component({
  selector: 'app-saas-development',
  standalone: true,
  imports: [ServicesTopPartComponent, SingleCardServiceComponent, OurBlogComponent, LeadingMultinationalClientsComponent, TechnologiesPlatformComponent],
  templateUrl: './saas-development.component.html',
  styleUrl: './saas-development.component.scss'
})
export class SaasDevelopmentComponent {
  title: string = 'Insights';

  serviceTopPart = {
    heading: 'Software as a Services',
    paragraph: 'Our custom business software solutions provide a wide range of services to various businesses.',
    topCard: [
      {
        cardHeading: 'SaaS Development Consulting',
        cardImageName: 'SaaS Development',
        cardImage: '../../../../assets/bespoke.png',
        cardParagrapg: `Our SaaS solutions have a proven track record of generating real, measurable business success for organizations. We follow a carefully thought-out path for implementing SaaS that uses cutting-edge tools, processes, and schedules without straying from your long-term company objectives. Get your SaaS ideas implemented and take advantage of promising SaaS solutions to aid in the generation of ongoing income development.`,
      },
      {
        cardHeading: 'SaaS Prototype & Design',
        cardImage: '../../../../assets/saasPrototype.png',
        cardParagrapg: `We use high-fidelity interactive prototypes to determine how best to showcase the features and user experience of your SaaS service. Using dynamically wireframed prototypes, our team of expert User Experience (UX) designers investigates behavioral patterns and complex issues ingrained in SaaS software. Obtain SaaS apps that offer the best user experience possible and are intuitive, eye-catching, and futuristic.`,
      },
      {
        cardHeading: 'SaaS Application Modernization & Support',
        cardImage: '../../../../assets/maintanceSupport.png',
        cardParagrapg: `Utilize our round-the-clock SaaS modernization and support services to maintain your SaaS application fully working and experience hassle-free productivity. Our sole reliance on cutting-edge technology helps us to accelerate the development of SaaS software, resulting in SaaS products with features that are optimized and fully functional in accordance with your business objectives.`,
      },
      {
        cardHeading: 'SaaS Platform Migration',
        cardImage: '../../../../assets/productTesting.png',
        cardParagrapg: `We use predictive intelligence and machine learning in our novel, data-driven strategy. You gain complete performance improvement as a consequence, allowing your SaaS application to reach its full potential. To resolve performance issues with your SaaS software and increase user engagement, we employ a variety of migration techniques and end-to-end automated functional testing of apps.`,
      },
      {
        cardHeading: 'SaaS Development Outsourcing',
        cardImage: '../../../../assets/uiuxDesign.png',
        cardParagrapg: `You may use our knowledgeable technical teams to handle your SaaS software development needs. We construct your SaaS project within the allotted time limit without sacrificing quality, managing product lifecycle management and navigating product development.`,
      },
    ],
  };

  singlaCard = {
    cardHeading: 'Leading provider of SaaS application development',
    cardImage: '../../../../assets/saasDevelopment.png',
    cardParagrapg: [
      {
        paragraph: `Discover our innovative methods for developing SaaS applications and the measurable growth results they bring to your business. In the cloud computing space, we are raising the standard for SaaS integration services and helping a range of companies, including startups, SMEs, ISVs, and enterprises, turn a profit of millions of dollars.`
      },
      {
        paragraph: `Our team of knowledgeable SaaS developers is readily available to help you achieve your goal of gaining a competitive edge in the market. We provide you state-of-the-art SaaS applications with better performance at more affordable costs.`
      },
      {
        paragraph: `The development team of our SaaS applications considers multiple factors starting from the concept and continuing through design, prototyping, testing, and launch. You can take advantage of flexible, stable, and secure SaaS applications because the team has experience with SaaS architectural implementation techniques.`
      },
    ]
  };


  multinationalClients = {
    heading: 'Our Leading Multinational Clients',
    paragraph: 'Join our diverse client base for a digital transformation journey',
    images: [
      {
        image: '../../../../assets/mindLife.webp',
        logoName: 'mindLife'
      },
      {
        image: '../../../../assets/theWorldBank.webp',
        logoName: 'theWorldBank'
      },
      {
        image: '../../../../assets/casio.png',
        logoName: 'casio'
      },
    ]
  };

}
