import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonService } from '../common.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    // Initialize the loginForm in the constructor
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // You can keep the ngOnInit lifecycle hook empty if not needed
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.loginService.loginUser(credentials).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/task']);
        },
        (error) => {
          console.error('Login failed', error);
          // Handle login error, show a notification, or update the UI
        }
      );
    }
  }
}