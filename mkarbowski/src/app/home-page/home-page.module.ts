import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { MaterialModule } from '../material/material.module';
import { HomePageRoutingModule } from './home-page-routing.module';

// components
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageContainerComponent } from './containers/home-page-container/home-page-container.component';

@NgModule({
  declarations: [
    NavigationContainerComponent,
    NavigationComponent,
    HomePageContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
