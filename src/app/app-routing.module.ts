import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutes} from './app-routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: AppRoutes.AboutUs,
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: AppRoutes.Testimonials,
    loadChildren: () => import('./modules/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
