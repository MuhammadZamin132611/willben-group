import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { BlogComponent } from './modules/blogs/blog/blog.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'blog',component:BlogComponent},
    {path:'**',component:HomeComponent},
];
