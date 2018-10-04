import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/container/main.component";
import {AuthGuard} from "./core/auth/_guards";
import {LoginComponent} from "./core/auth/component/login";


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
