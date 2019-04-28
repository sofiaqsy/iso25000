import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/component/header/header.component';
import { MenuSidenavComponent } from './layout/component/menu-sidenav/menu-sidenav.component';
import { UserComponent } from './user/user.component';
import { RegistryComponent } from './user/component/registry/registry.component';
import { ProjectComponent } from './project/project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './dashboard/component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    MenuSidenavComponent,
    UserComponent,
    RegistryComponent,
    ProjectComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
