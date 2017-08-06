import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/auth/signup'
  });

  newUser = {
    name: '',
    username: '',
    password: "",
    email: ""
  };
  feedback: any;
  user:any;
  error: string;

  constructor( private sessionService: SessionService,
               public router: Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
       this.feedback = JSON.parse(response).message;
       console.log(this.feedback);
     };

     this.uploader.onErrorItem = (item, response, status, headers) => {
       this.feedback = JSON.parse(response).message;
       console.log(this.feedback)
     };
  }

  signup() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newUser.name);
      form.append('username', this.newUser.username);
      form.append('email', this.newUser.email);
      form.append('password', this.newUser.password);
    };
    this.uploader.uploadAll();
    this.router.navigate(['/home']);
    console.log(`${this.newUser.username} is logged`)
  }
}
