import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import {LandingComponent} from './components/landing/landing.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {SolutionButtonModule} from '../solution-button/solution-button.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, AngularMaterialModule, SolutionButtonModule],
})
export class LandingModule {}
