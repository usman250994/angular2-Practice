import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Login } from '../login';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  login = new Login('username?', 'password?');

constructor(private router: Router) {}

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
  localStorage.setItem('userName', form.form.controls.userName.value);
  localStorage.setItem('password', form.form.controls.password.value);
  console.log('navigating to correct page');
  this.router.navigate(['']);
  }

}
