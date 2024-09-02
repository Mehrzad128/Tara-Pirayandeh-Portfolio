import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { BiographyComponent } from './+pages/biography/biography.component';
import { AwradsComponent } from './+pages/awrads/awrads.component';


export const routes: Routes = [
    {path:'home' , component:HomeComponent },
    {path:'biography' , component:BiographyComponent},
    {path:'awards' , component:AwradsComponent},
    {path:'' , redirectTo:'/home' , pathMatch:'full'},
    {path:'**' , redirectTo:'/home'}
];
