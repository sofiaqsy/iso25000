import {Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ProjectComponent} from '../project/project.component';
import {UserComponent} from '../user/user.component';

export const dashboardRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
];
