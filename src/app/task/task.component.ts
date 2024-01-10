
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
interface TableData {
  id: number;
  date:any;
  ServiceCallNo: string;
  ClientName: string;
  ServiceCallTitle: string;
  PlanCompletionDate: string;
  ProductModule: string;
  BugEnhncmtment: string;
  CallRaisedBy: string;
  CommunicationMedium: string;
  TestedDate: string;
  ProductName: string;
  VersionNumber: string;
  ModuleName: string;
  Interface: string;
  Priority: string;
  Description: string;
  AssignedToName: string;
  CompletedByName: string;
  CompletedDate: string;
  VerifiedByName: string;
  VerifiedNameDate: string;
  Status: string;
  AcceptedBy: string;
  AcceptedDate: string;
  WorkDoneStatus: string;
  WorkDoneDescription: string;
  WorkDoneDate: string;
  Verified: boolean;
  VerifiedDate: string;
  VerifiedComment: string;
  VerifiedBy: string;
  Closed: boolean;
  ClosedComment: string;
  ClosedBy: string;
  ClosedDate: string;
  AssignedOnName: string;
  TestedBy: string;
  Remarks: string;
  Suggestion: string;
  Section: string;
  EnteredBy: string;
  EnteredDate: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class TaskComponent   {
  activeRoute: string = '';
  options:any;
  visible: boolean = false;
  selecteditem:any;
  showClear:any;
  style:any;
  ingredient!: string;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

 
  
}

  

