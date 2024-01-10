import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OTPComponent } from './otp/otp.component';
import { PasswordComponent } from './password/password.component';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [


  {path:'',component:HomePageComponent},
  {path:'app',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'OTP',component:OTPComponent},
  {path:'password',component:PasswordComponent},
  {path:'list',component:ListComponent},
  {path:'Task',component:TaskComponent},
  {path:'newtask',component:NewtaskComponent},
  {path:'foo',component:FooComponent},
  {path:'report',component:ReportComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
