
import{CommonService} from '../common.service';
import{ Component , OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  todo = ['Intisar', 'Nasser', 'AL-Hadhrami'];
  Inprogress = ['Task Traker Pro1', 'Task Traker Pro2', 'Task Traker Pro3'];
  done = ['1', '2', '3'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
 
 
}

