import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName = ""
  email: string = ""
  password = ""
  lastName = "";

  constructor(private userService: UserService) {

  }

  signup() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);

    let user = { "firstName": this.firstName, "lastName": this.lastName, "email": this.email, "password": this.password }
    this.userService.signup(user).subscribe(resp => {
      alert(resp.msg);
    }, error => {
      alert(error.error.msg);
 
    })

  }
}
