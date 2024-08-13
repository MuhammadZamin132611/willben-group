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

  customerImage:string='../../../../../assets/customer_software_development.webp'
  customer: string = 'Customer Software Development';
  customerPara:string=`Willben Group Private Limited can help you achieve a unique advantage for your complex business needs. Realize the full potential of our expertise in developing dependable, agile custom software solutions and applications. Accelerate the digital transformation of your company with our dedication to scalability, agility, and technological innovation`

}
