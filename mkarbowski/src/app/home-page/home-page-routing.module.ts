import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component:  AboutPageComponent},
  { path: 'resume', component:  ResumePageComponent},
];
export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
