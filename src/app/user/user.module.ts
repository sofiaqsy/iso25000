import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {RegistryComponent, USER_COMPONENTS} from './component';
import {UserComponent} from './user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent
      },
      {
        path: 'registro',
        component: RegistryComponent
      }
    ])
  ],
  declarations: [UserComponent, USER_COMPONENTS],
})
export class UserModule {}
