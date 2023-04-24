import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
{
  component:SignupComponent,
  path:"signup"
},
{
  component:LoginComponent,
  path:"login" 
},
{
  component:ForgotPasswordComponent,
  path:"forgot-password"
},
{
  path:"",
  component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
