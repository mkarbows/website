import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HomePageRoutingModule } from './home-page-routing.module';

// components
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ResumePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule { }
