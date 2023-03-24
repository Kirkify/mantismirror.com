import { Component } from '@angular/core';
import {AppRoutes} from '../../app-routes';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {
  appRoutes = AppRoutes;
}
