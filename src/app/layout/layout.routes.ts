import {Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ProjectComponent} from '../project/project.component';

export const layoutRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'usuario',
    loadChildren: '../user/user.module#UserModule'
  }

];
