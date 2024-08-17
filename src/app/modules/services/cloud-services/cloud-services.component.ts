import { Component } from '@angular/core';
import { ServicesTopPartComponent } from '../subComponent/services-top-part/services-top-part.component';
import { SingleCardServiceComponent } from '../subComponent/single-card-service/single-card-service.component';
import { LeadingMultinationalClientsComponent } from "../subComponent/leading-multinational-clients/leading-multinational-clients.component";
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-cloud-services',
  standalone: true,
  imports: [MaterialModule, ServicesTopPartComponent, SingleCardServiceComponent, LeadingMultinationalClientsComponent],
  templateUrl: './cloud-services.component.html',
  styleUrl: './cloud-services.component.scss'
})
export class CloudServicesComponent {

  serviceTopPart = {
    heading: 'Consulting and Implementation Services for Cloud Computing',
    paragraph: `Wiilben Group Private Limited While increasing productivity and time-to-market, cloud consulting services provide the luxury of reduced IT expenditures and resources. Take use of the full potential of our cloud app development services by using the finest practices for your company's needs.`,
    topCard: [
      {
        cardHeading: 'Cloud Migration Services',
        cardImage: '../../../../assets/bespoke.png',
        cardParagrapg: 'Combine the architecture of the current solutions and update them to better meet business needs for content management and scalability. We provide workload migration, cloud-to-cloud mobility, validation, and performance testing.',
      },
      {
        cardHeading: 'Cloud Automation',
        cardImage: '../../../../assets/application.png',
        cardParagrapg: `With an emphasis on assisting clients in centralizing the administration of their multi-cloud platforms, we provide cloud automation services for all popular cloud platforms. As your partner for cloud solutions, we'll work to hasten the deployment of cloud automation to boost productivity and creativity in the workplace.`,
      },
      {
        cardHeading: 'Cloud Security',
        cardImage: '../../../../assets/cloudSeurity.png',
        cardParagrapg: 'When a lot of sensitive corporate data is stored on the cloud, there is always a risk of cyberattacks. To find vulnerabilities and maintain the security of your systems, you can work with our cloud service provider in the USA. We provide data protection, security and risk assessment, performance optimization, and ongoing monitoring.',
      },
      {
        cardHeading: 'Highly Available and Fault Tolerant Infra',
        cardImage: '../../../../assets/highlyAvailable.png',
        cardParagrapg: 'We provide highly available infrastructure that can be scaled to meet demand and traffic levels. Give your application a fault-free infrastructure so that it can operate with maximum uptime and fewer problems.',
      },
      {
        cardHeading: 'Cost Optimization',
        cardImage: '../../../../assets/costOptimize.png',
        cardParagrapg: '60% of businesses maximize their current cloud usage to cut costs. In order to keep cloud costs as low as possible, our US-based cloud support company is mindful of financial constraints. We guarantee that you will save money on cloud expenses while still receiving the performance that your most demanding IT workloads require.',
      },
      {
        cardHeading: 'Continuous Monitoring',
        cardImage: '../../../../assets/maintanceSupport.png',
        cardParagrapg: 'To make sure your solution architecture is optimal, we provide cloud-based application monitoring, customized parameter and check creation, and personalized alert setup.',
      },
    ],
  };


  singlaCard = {
    cardHeading: 'Cloud Transformation Company',
    cardImage: '../../../../assets/cloudTranformation.png',
    cardParagrapg: [
      {
        paragraph: `Willben Group Private Limited is a cloud development and solution provider that offers affordable cloud services to help businesses modernize their IT infrastructure. Our team of professionals offers innovative cloud computing consulting services that enable businesses to achieve unprecedented levels of productivity. You can modernize your systems to promote innovation and business success with the aid of our automation and cloud migration services. Cloud transformation solutions also improve the security of your data and digital infrastructure against cyberattacks, providing you the peace of mind you need to concentrate on running your business.`
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

  heading: string = `For us, Cloud Platforms Digital Capabilities`;
  paragraph1: string = `Willben Group Private Limited offers cloud application development services across all major cloud platforms. Our group of specialists in solution design selects the suitable Cloud platform.`;

}
