import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { HomePageContainerComponent } from './containers/home-page-container/home-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageContainerComponent
  },
  {
    path: 'about',
    component: HomePageContainerComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
