import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionButtonComponent } from './solution-button/solution-button.component';
import {RouterModule} from '@angular/router';
import {AngularMaterialModule} from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    SolutionButtonComponent
  ],
  exports: [
    SolutionButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ]
})
export class SolutionButtonModule { }
