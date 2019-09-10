import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { HomePageRoutingModule } from './home-page-routing.module';

// components
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationContainerComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
