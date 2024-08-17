import { Component } from '@angular/core';
import { ServicesTopPartComponent } from '../subComponent/services-top-part/services-top-part.component';
import { SingleCardServiceComponent } from '../subComponent/single-card-service/single-card-service.component';
import { LeadingMultinationalClientsComponent } from "../subComponent/leading-multinational-clients/leading-multinational-clients.component";
import { OurBlogComponent } from '../../blogs/blog/our-blog/our-blog.component';
import { TechnologiesPlatformComponent } from '../subComponent/technologies-platform/technologies-platform.component';

@Component({
  selector: 'app-application-development',
  standalone: true,
  imports: [ServicesTopPartComponent, SingleCardServiceComponent, LeadingMultinationalClientsComponent, OurBlogComponent, TechnologiesPlatformComponent ],
  templateUrl: './application-development.component.html',
  styleUrl: './application-development.component.scss'
})
export class ApplicationDevelopmentComponent {
  title:string='Insights';
  serviceTopPart1 = {
    heading: 'Mobile Application Development Services',
    paragraph: 'Our staff of highly skilled mobile app developers at Willben Group Private Limited. Through the development of customer-focused mobile applications, they can bring your business concepts to life.',
    topCard: [
      {
        cardHeading: 'Design & Prototyping of Apps',
        cardImage: '../../../../assets/bespoke.png',
        cardParagrapg: 'You can get help from our mobile app designers in developing and prototyping a custom mobile application. We provide an easy-to-use interface and experience that guarantees increased ROI and increased engagement.',
      },
      {
        cardHeading: 'Native App development',
        cardImage: '../../../../assets/application.png',
        cardParagrapg: 'Our native app developers have a great deal of experience making secure and distinctive apps for particular platforms. They include specialists in iOS and Android development. Every app is customized to meet your goals and objectives.',
      },
      {
        cardHeading: 'Cross-Platform App development',
        cardImage: '../../../../assets/maintanceSupport.png',
        cardParagrapg: 'Our cross-platform app developers are experts at building hybrid apps with React Native and Flutter, among other technologies. We create affordable solutions for companies of all sizes and in a variety of industries.',
      },
    ],
  };

  singlaCard = {
    cardHeading: 'Custom Mobile Application Development Services',
    cardImage: '../../../../assets/mobileAppDevelopment.jpg',
    cardParagrapg: [
      {
        paragraph: `Willben Group Private Limited has an experienced team of mobile app developers that can create feature-rich, performant apps for various platforms. We use innovative methods and tools to make sure your company stays ahead of the competition in a highly competitive market. Even the most complex business needs can be expertly handled by our staff. Millions of users have benefited from the robust apps we've created for iOS and Android. Being a top mobile app development company, we place a high value on reliable functionality, secure designs, and UI/UX. Work together with our developers to combine technical expertise and inventiveness to bring your digital ideas to life.`
      }
    ]
  };

  serviceTopPart2 = {
    heading: 'Mobile App Development Experience',
    paragraph: '',
    topCard: [
      {
        cardHeading: 'Android App Development',
        cardImage: '../../../../assets/android.png',
        cardParagrapg: `One popular open-source operating system for mobile apps is called Android. Our knowledgeable staff creates unique business apps to help you stay one step ahead of the competition. Our Android app developers create flexible, affordable, and user-friendly solutions using the best frameworks and tools. Join our team in embracing digital transformation.`,
      },
      {
        cardHeading: 'iOS App Development',
        cardImage: '../../../../assets/iosApp.png',
        cardParagrapg: `iOS has gained widespread popularity thanks to its strong brand value and safe, effective interactive designs. You can create innovative business applications with the assistance of our knowledgeable iOS developers. Using Swift and Objective-C primarily, we provide eye-catching designs and unique iOS solutions across multiple domains.`,
      },
      {
        cardHeading: 'Cross Platform Mobile Apps',
        cardImage: '../../../../assets/saasPrototype.png',
        cardParagrapg: `App development companies can create applications that work with multiple operating systems by using cross-platform development. Our group specializes in creating these kinds of applications for customers in different industries. With native-like apps for iOS and Android, we can revolutionize your company and help you succeed in the digital sphere.`,
      },
      {
        cardHeading: 'React Native Cross Platform App Development',
        cardImage: '../../../../assets/reactNavtive.png',
        cardParagrapg: `The benefits of React Native app development paired with the Willben Group Private Limited team's experience create the ideal recipe for a successful mobile application. This combination provides you with an advantage over your competitors through efficient cross-platform app development for iOS and Android.`,
      },
      {
        cardHeading: 'Flutter Cross Platform App Development',
        cardImage: '../../../../assets/prototyping.png',
        cardParagrapg: `Your app will have a native feel and look thanks to Flutter app development, which your users will love. In order to produce a top-notch app for users of iOS and Android, our mobile app development services will further streamline the Flutter app development process.`,
      },
      {
        cardHeading: 'Mobile App Support & Maintenance',
        cardImage: '../../../../assets/maintanceSupport.png',
        cardParagrapg: 'As we all know, creating an application is not enough. Maintaining a smooth user experience and providing timely updates are equally crucial. We can keep your app updated with the newest features and versions while offering full support and maintenance services for mobile apps.',
      },
    ],
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
