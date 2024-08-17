import { Component } from '@angular/core';
import { ServicesTopPartComponent } from '../subComponent/services-top-part/services-top-part.component';
import { SingleCardServiceComponent } from '../subComponent/single-card-service/single-card-service.component';
import { LeadingMultinationalClientsComponent } from '../subComponent/leading-multinational-clients/leading-multinational-clients.component';
import { OurBlogComponent } from '../../blogs/blog/our-blog/our-blog.component';
import { TechnologiesPlatformComponent } from '../subComponent/technologies-platform/technologies-platform.component';

@Component({
  selector: 'app-web-app-development',
  standalone: true,
  imports: [TechnologiesPlatformComponent, OurBlogComponent, ServicesTopPartComponent, SingleCardServiceComponent, LeadingMultinationalClientsComponent],
  templateUrl: './web-app-development.component.html',
  styleUrl: './web-app-development.component.scss'
})
export class WebAppDevelopmentComponent {
  title: string = 'Insights'
  serviceTopPart = {
    heading: 'Web Application Development Services',
    paragraph: 'Gain a competitive edge by quickening the development of your web applications with Senwell Group Private Limited',
    topCard: [
      {
        cardHeading: 'Front-end Web Development',
        cardImage: '../../../../assets/fronted-developer.png',
        cardParagrapg: `Make use of the reusable components and implement component-driven architecture with cutting-edge front-end technologies such as Angular, Vue, and React.js. Senwell Group Private Limited develops web applications and skillfully blends necessary functionalities with gorgeous user interfaces.`,
      },
      {
        cardHeading: 'Back-end Development',
        cardImage: '../../../../assets/backend-developer.png',
        cardParagrapg: `Make your application scalable by utilizing the skilled pool of backend web developers to switch between its various features with ease. We provide SQL and NoSQL databases for dependable data storing and retrieval using Microservices, as well as AWS and Azure services for hosting the backend services on the cloud.`,
      },
      {
        cardHeading: 'SaaS Application Development',
        cardImage: '../../../../assets/saasapplicationdevelopment.png',
        cardParagrapg: `Go in-depth with the client to fully comprehend the extent of the web application and its scalability. Our skilled and technically sound web app development team can provide multi-tenant, secure SaaS application development solutions that will ultimately benefit businesses.`,
      },
      {
        cardHeading: 'Progressive Web Apps',
        cardImage: '../../../../assets/progressiovewebapp.png',
        cardParagrapg: `In line with the demands of contemporary app development, we produce native web applications that boast improved technological features, quicker application loads, highly interactive visual content, and simple navigation between various features.`,
      },
      {
        cardHeading: 'Ecommerce Web App Development Company',
        cardImage: '../../../../assets/ecommercewebapp.png',
        cardParagrapg: `Build and customize eCommerce web apps with Shopify, Magento, and unique frameworks to increase online visibility and business growth. Our skilled web developers create user-friendly, safe, and quick-to-launch eCommerce applications to guarantee user engagement and growth.`,
      },
      {
        cardHeading: 'Custom Web Application Development services',
        cardImage: '../../../../assets/iosApp.png',
        cardParagrapg: `We assist you in providing outstanding web development services along with knowledgeable resources and technological aptitude to support your overall business plan. Our proficiency in developing customized web applications guarantees interoperability, expandability, and user-friendly interfaces.`,
      },
    ],
  };

  singlaCard = {
    cardHeading: 'Web Application Development',
    cardImage: '../../../../assets/webappdevelopment.png',
    cardParagrapg: [
      {
        paragraph: 'As a top web application development company, we boost client satisfaction by utilizing our extensive experience developing and providing specialized web application development services. We assist you in putting the appropriate technologies into practice where they will most effectively add value to your company.'
      },
      {
        paragraph: 'Finding out "What does the client want?" is our main goal. Our developers create and provide outstanding web app development services for long-term business growth, starting from ideation and ending with testing and delivery.'
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
