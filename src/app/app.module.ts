import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import{HttpClientModule}from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OTPComponent } from './otp/otp.component';
import { PasswordComponent } from './password/password.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartModule } from 'primeng/chart';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { FooComponent } from './foo/foo.component';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,

    RegisterComponent,
    LoginComponent,
    HomePageComponent,
    OTPComponent,
    PasswordComponent,
    NewtaskComponent,
    FooComponent
    
  ],
  imports: [
    RouterModule,
  BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     ConfirmDialogModule,
     DragDropModule,
     BrowserAnimationsModule,FormsModule,ReactiveFormsModule
    // FormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // PanelMenuModule,
    // TableModule,
    // DropdownModule,
    // ButtonModule,
    // DialogModule,
    // CheckboxModule,
    // BreadcrumbModule,
    // CalendarModule,
    // TriStateCheckboxModule,
    // PasswordModule,
    // CardModule,
    // FieldsetModule,
    // InputTextModule,
    // MultiSelectModule,
    // PanelModule,
    // TagModule,
    // EditorModule,
    // InputNumberModule,
    // InputTextareaModule,
    // FileUploadModule,
    // ToastModule,
    // DynamicDialogModule
  ],
  
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
