import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { BlogComponent } from './modules/blogs/blog/blog.component';
import { BenefitsApiImplementingComponent } from './modules/blogs/benefits-api-implementing/benefits-api-implementing.component';
import { JavaFutureComponent } from './modules/blogs/java-future/java-future.component';
import { ReactjsPopularComponent } from './modules/blogs/reactjs-popular/reactjs-popular.component';
import { MostPopularComponent } from './modules/blogs/most-popular/most-popular.component';
import { PortfolioComponent } from './modules/company/portfolio/portfolio.component';
import { AboutUsComponent } from './modules/company/about-us/about-us.component';
import { SoftwareProductDevelopmentComponent } from './modules/services/software-product-development/software-product-development.component';
import { CustomerSoftwareDevelopmentComponent } from './modules/services/customer-software-development/customer-software-development.component';
import { SaasDevelopmentComponent } from './modules/services/saas-development/saas-development.component';
import { ApplicationDevelopmentComponent } from './modules/services/application-development/application-development.component';
import { WebAppDevelopmentComponent } from './modules/services/web-app-development/web-app-development.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'benifit', component: BenefitsApiImplementingComponent },
    { path: 'most-popular', component: MostPopularComponent },
    { path: 'react-popular', component: ReactjsPopularComponent },
    { path: 'java-future', component: JavaFutureComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'about_us', component: AboutUsComponent },
    { path: 'softwareproduct', component: SoftwareProductDevelopmentComponent },
    { path: 'customer-software-developmen', component: CustomerSoftwareDevelopmentComponent },
    { path: 'saas-development-service', component: SaasDevelopmentComponent },
    { path: 'application-development', component: ApplicationDevelopmentComponent },
    { path: 'web-development', component: WebAppDevelopmentComponent },
    { path: '**', component: HomeComponent },
];
