import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'**',component:HomeComponent},
];
