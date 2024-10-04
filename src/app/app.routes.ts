import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ContactPageComponent } from './modules/contact/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './modules/about/pages/about-page/about-page.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    }
];
