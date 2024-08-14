import { Component } from '@angular/core';

@Component({
  selector: 'app-services-we-offer',
  standalone: true,
  imports: [],
  templateUrl: './services-we-offer.component.html',
  styleUrl: './services-we-offer.component.scss'
})
export class ServicesWeOfferComponent {
  heading: string = 'Services We Offer'
  headingDesc: string = `We build software solutions with clean code and engage in all stages of product development.`

  softwareImage: string = 'assets/software_product_development.webp'
  software: string = 'Software Product Development'
  softwarePara: string = `Willben Group Private Limited can help you realize your business's vision because we are experts in developing software products that are intuitive and driven by design. Our objective is to accelerate the innovation of software products, offering a unique competitive advantage and a superior customer experience.`;

  customerImage: string = '../../../../../assets/customer_software_development.webp'
  customer: string = 'Customer Software Development';
  customerPara: string = `Willben Group Private Limited can help you achieve a unique advantage for your complex business needs. Realize the full potential of our expertise in developing dependable, agile custom software solutions and applications. Accelerate the digital transformation of your company with our dedication to scalability, agility, and technological innovation`

  saasImage: string = '../../../../../assets/SaaS_development.webp'
  saas: string = 'SaaS Development'
  saasPara: string = 'Creating a successful SaaS product requires more than just writing code, it also requires careful planning, user-centered design thinking, efficient development, and ongoing improvement. With our comprehensive SaaS development services, which cover every stage from conception to deployment and beyond, you can take your business to new heights.'

  testingImage: string = '../../../../../assets/software_testing.webp';
  testing: string = 'Software Testing & QA'
  testingPara: string = 'Work with Willben Group Private Limited to fully immerse yourself in the dynamic world of software testing and quality assurance services. Our dedication assures you of cost-effectiveness as well as unmatched delivery speed without sacrificing quality. Set new industry standards for excellence with a significant increase in the efficiency of code deployment and an optimized Software Development Life Cycle.'

  applicationImage: string = '../../../../../assets/application_development.webp';
  application: string = 'Application Development';
  applicationPara: string = 'Willben Group Private Limited is a leading mobile app development company that prides itself on having a team of experienced developers with a track record of accomplishments. Our professionals are skilled in creating hybrid, iOS, and Android apps with a clear emphasis on user-centric design. Put your trust in us to use our unmatched experience and digital intelligence to bring your vision to life.'

  uiuxImage: string = '../../../../../assets/ui_ux.webp'
  uiux: string = 'UI/UX Design';
  uiuxPara: string = `Create a user interface that is enticing in order to improve business engagement and provide memorable online experiences. Unlock Willben Group Private Limited' full potential by making use of state-of-the-art tools and technologies to create aesthetically pleasing and intuitive designs. To make sure your online presence sticks out in the crowded online space, take advantage of our extensive creative designing experience.`

  cloudImage: string = '../../../../../assets/cloud.webp';
  cloud: string = 'Cloud';
  cloudPara: string = `Willben Group Private Limited is a prominent provider of cloud solutions and a leading cloud development company. Its mission is to help businesses transform their IT infrastructure seamlessly by offering highly affordable cloud services. Our team of seasoned professionals specializes in providing cutting-edge cloud computing consulting services, enabling businesses to achieve previously unheard-of levels of productivity.`

  webImage: string = '../../../../../assets/web_development.webp';
  web: string = 'Web Development';
  webPara: string = `Give Willben Group Private Limited the task of meticulously planning, developing, and implementing web apps that result in notable changes to transform your web development projects. Within our comprehensive development approach, we begin by conducting a thorough analysis of the disruptive web development challenges. Next, with ease, we design a user-friendly user interface (UI/UX) that ensures a reliable, fully functional web solution tailored to your unique needs.`

}
