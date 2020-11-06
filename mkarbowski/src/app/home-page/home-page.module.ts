import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HomePageRoutingModule } from './home-page-routing.module';

// components
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageContainerComponent } from './containers/home-page-container/home-page-container.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HomePageContainerComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule { }
