import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7185/api/User';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    // Assuming userData has properties like Name, Email, Password, ContactNo, Address
    const requestBody = {
      Name: userData.name,
      Email: userData.email,
      Password: userData.password, // Assuming Password is already hashed on the client side
      ContactNo: userData.contactNo, // Adjust accordingly if this field is present in your form
      Address: userData.address, // Adjust accordingly if this field is present in your form
      ConfirmationToken : userData.confirmationToken,

    };

    return this.http.post(`${this.apiUrl}/register`, requestBody);
  }
}