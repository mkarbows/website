import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PhotographyPageComponent } from './components/photography-page/photography-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { SpotifyPageComponent } from './components/spotify-page/spotify-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component:  AboutPageComponent},
  { path: 'experience', component:  ResumePageComponent},
  { path: 'photography', component:  PhotographyPageComponent},
  { path: 'music', component:  SpotifyPageComponent},
];
export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
