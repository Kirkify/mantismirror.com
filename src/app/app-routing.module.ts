import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutes} from './app-routes';
import {ProblemComponent} from './components/problem/problem.component';
import {SolutionComponent} from './components/solution/solution.component';
import {ContactComponent} from './components/contact/contact.component';
import {FaqComponent} from './components/faq/faq.component';

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
  {
    path: AppRoutes.Problem,
    component: ProblemComponent
  },
  {
    path: AppRoutes.Solution,
    component: SolutionComponent
  },
  {
    path: AppRoutes.Contact,
    component: ContactComponent
  },
  {
    path: AppRoutes.FAQ,
    component: FaqComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
