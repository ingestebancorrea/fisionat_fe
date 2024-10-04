import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    HomePageComponent,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }