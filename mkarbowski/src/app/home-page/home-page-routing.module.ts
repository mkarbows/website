import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { HomePageContainerComponent } from './containers/home-page-container/home-page-container.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageContainerComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
