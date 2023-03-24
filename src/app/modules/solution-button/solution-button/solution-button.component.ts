import { Component } from '@angular/core';
import {AppRoutes} from '../../../app-routes';

@Component({
  selector: 'app-solution-button',
  templateUrl: './solution-button.component.html',
  styleUrls: ['./solution-button.component.scss']
})
export class SolutionButtonComponent {
  appRoutes = AppRoutes;
}
