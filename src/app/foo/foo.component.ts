import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit{
  tasks: any[] = [];
  persons: string[] = ['Maryam', 'Lamia', 'Intisar', 'Ahmed']; // defining persons


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
        console.log('Fetched tasks:', tasks); // Add this line
      },
      (error) => {
        console.error('Error fetching tasks', error);
      }
    );
  }
  editTask(task: any): void {
    // Implement your edit task logic here
    console.log('Editing task:', task);
  }

  deleteTask(task: any): void {
    // Implement your delete task logic here
    console.log('Deleting task:', task);
  }
  
}

