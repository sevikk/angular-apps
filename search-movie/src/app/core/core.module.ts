import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseService} from "./services/base.service";
import {AuthenticationService} from "./auth/_services/authentication.service";
import {UserService} from "./auth/_services/user.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BaseService,
    AuthenticationService,
    UserService
  ],
  declarations: []
})
export class CoreModule {
}
