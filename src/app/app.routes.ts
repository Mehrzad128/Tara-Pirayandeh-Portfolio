import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { BiographyComponent } from './+pages/biography/biography.component';


export const routes: Routes = [
    {path:'home' , component:HomeComponent },
    {path:'biography' , component:BiographyComponent},
    {path:'' , redirectTo:'/home' , pathMatch:'full'},
    {path:'**' , redirectTo:'/home'}
];
