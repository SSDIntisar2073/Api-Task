import { Component } from '@angular/core';


import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData = {
    name: '',
    password: '',
    email: '',
    contactNo: '', // Add this field if present in your form
    address: '', // Add this field if present in your form
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.registerUser(this.userData).subscribe(
      (response) => {
        console.log('Registration successful', response);
        // Handle successful registration
      },
      (error) => {
        console.error('Registration failed', error);
        // Handle registration error
      }
    );
  }
}
