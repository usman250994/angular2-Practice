import { Injectable, Input } from '@angular/core';
import { CanActivate} from '@angular/router/src/interfaces';
import { LoginComponent } from './login/login.component';
import { rootRoute } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Injectable()
// tslint:disable-next-line:one-line
export class AuthGuardService implements CanActivate{
  @Input()
  loginref: LoginComponent;
  param1: string;
  param2: string;

  constructor(private router: Router) { }

  canActivate() {
  console.log('AuthGuard#canActivate called');
  // storing login paramters in variables
  this.param1 = localStorage.userName;
  this.param2 = localStorage.password;
  console.log(this.param1, this.param2);
  // tslint:disable-next-line:one-line
  // checking whether parameters are correct or not?
  if (this.param1 === 'usman ali siddiqui' && this.param2 === '123**123'){
    return true;
  }else {
    // if wrong login credentials then
  this.router.navigate(['login']);
}
  }
}
