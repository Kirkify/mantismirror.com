import { Component, inject } from '@angular/core';
import {AppRoutes} from '../../../../app-routes';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  appRoutes = AppRoutes;
}
