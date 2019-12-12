import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router) {
  }

  btnDisabled = false;

  ngOnInit() { }

  validate() {
    if (this.email) {
      if (this.password) {
        return true;
      } else {
        alert('Password is not entered');
      }
    } else {
      alert('Email is not entered.');
    }
  }

  async login() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        // const data = await this.rest.post(
        //   'http://localhost:3030/api/accounts/login',
        //   {
        //     email: this.email,
        //     password: this.password,
        //   },
        // );
        // if (data['success']) {
        //   localStorage.setItem('token', data['token']);
        //   await this.data.getProfile();
        //   this.router.navigate(['/']);
        // } else {
        //   this.data.error(data['message']);
        // }

        let currentUserToken: object;
        let message = '';
        const loginUser = JSON.parse(localStorage.getItem('LoginUser'));
        if (loginUser) {
          if (loginUser.email === this.email) {
            currentUserToken = JSON.parse(localStorage.getItem('LoginUser')).token;
            message = 'Profile Found';
          }
        } else {
          localStorage.setItem('LoginUser', JSON.stringify({ email: this.email, password: this.password }));
          message = 'Profile Added';
        }
        this.router.navigate(['/home']);
      }
    } catch (error) {
      // this.data.error(error['message']);
      alert('Error Caught');
    }
    this.btnDisabled = false;
  }
}
