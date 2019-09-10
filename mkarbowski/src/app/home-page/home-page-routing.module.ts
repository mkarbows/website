import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationContainerComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
