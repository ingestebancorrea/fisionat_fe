import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  imports: [
    AboutPageComponent,
    CommonModule,
    SharedModule
  ]
})
export class AboutModule { }