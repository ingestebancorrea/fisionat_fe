import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ContactPageComponent } from './modules/contact/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './modules/about/pages/about-page/about-page.component';
import { TherapyPageComponent } from './modules/services/pages/therapy-page/therapy-page.component';
import { NeuroPageComponent } from './modules/services/pages/neuro-page/neuro-page.component';
import { StimulationPageComponent } from './modules/services/pages/stimulation-page/stimulation-page.component';
import { GeriatricPageComponent } from './modules/services/pages/geriatric-page/geriatric-page.component';

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
    },
    {
        path: 'services/physical-therapy',
        component: TherapyPageComponent
    },
    {
        path: 'services/neurorehabilitation',
        component: NeuroPageComponent
    },
    {
        path: 'services/early-stimulation',
        component: StimulationPageComponent
    },
    {
        path: 'services/geriatric-physiotherapy',
        component: GeriatricPageComponent
    }
];
