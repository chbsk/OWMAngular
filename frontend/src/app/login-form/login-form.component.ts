import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: '';
  passw: '';

  log(user, passw) {
    this.user = user; 
    this.passw = passw;
    console.log(this.user);
    console.log(this.passw);
  }


}
