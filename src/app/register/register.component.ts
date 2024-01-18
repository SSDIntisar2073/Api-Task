import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { LoginService } from '../login.service';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = {
    name: '',
    email: '',
    password: '',
    contactNo: '', // Add this field if present in your form
    address: '', // Add this field if present in your form
    FormGroup:'',
   
  };
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private router: Router) {
    // Initialize the registerForm in the constructor
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],  // Adjusted to match the correct control name
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      // Add other form controls if needed
    });
  }

  ngOnInit(): void {
    // You can keep the ngOnInit lifecycle hook empty if not needed
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Your form submission logic goes here
      this.apiservice.registerUser(this.userData).subscribe(
        (response: any) => {
          console.log('Registration successful', response);
          // Handle successful registration
        },
        (error: any) => {
          console.error('Registration failed', error);
          // Handle registration error
        }
      );
    }
  }
}