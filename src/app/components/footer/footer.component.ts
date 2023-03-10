import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AppRoutes} from '../../app-routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  appName = environment.appName;
  appRoutes = AppRoutes;
}
