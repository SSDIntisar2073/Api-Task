import { Component } from '@angular/core';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],

})
export class NewtaskComponent {
  taskData: any = {}; // Define an object to store form data

  constructor(private taskService: TaskService) { }

  onSubmit(): void {
    // Call your Task service to send the data to the API
    this.taskService.addTask(this.taskData).subscribe(
      (response) => {
        console.log('Task added successfully', response);
        // Handle success, e.g., show a success message or redirect
      },
      (error) => {
        console.error('Error adding task', error);
        // Handle error, e.g., show an error message
      }
    );
  }
}  

