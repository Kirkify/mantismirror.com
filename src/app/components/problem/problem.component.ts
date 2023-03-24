import { Component } from '@angular/core';
import {AppRoutes} from '../../app-routes';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent {
  appRoutes = AppRoutes;
}
