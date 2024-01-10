// task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7185/api/Task'; // Adjust this URL to your API endpoint

  constructor(private http: HttpClient) {}

  addTask(taskData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addtask`, taskData);
  }
  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
