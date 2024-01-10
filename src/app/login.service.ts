// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7185/api/User';

  constructor(private http: HttpClient) {}

  loginUser(loginData: any): Observable<any> {
    // Assuming loginData has properties like Email and Password
    const requestBody = {
      Email: loginData.email,
      Password: loginData.password,
    };

    return this.http.post(`${this.apiUrl}/login`, requestBody);
  }
}
