import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs';
import {AppRoutes} from './app-routes';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = environment.appName;
  appRoutes = AppRoutes;

  private breakpointObserver = inject(BreakpointObserver);
  isMedium$ = this.breakpointObserver.observe('(min-width: 1100px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
