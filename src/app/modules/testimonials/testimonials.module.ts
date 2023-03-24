import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {SolutionButtonModule} from '../solution-button/solution-button.module';


@NgModule({
  declarations: [
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    AngularMaterialModule,
    SolutionButtonModule
  ]
})
export class TestimonialsModule { }
