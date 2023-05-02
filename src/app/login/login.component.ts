import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'For Loop';
  users=["jems","om","bhavesh","shubh"]
  userDetails=[
    {name:"jems",emailId:'jems@gmail.com',phone:"1281898910"},
    {name:"om",emailId:'om89@gmail.com',phone:"20051898910"},
    {name:"bhavesh",emailId:'bhavesh12@gmail.com',phone:"98981898910"},
    {name:"shubh",emailId:'shubh@gmail.com',phone:"148848898910"}
  ]
}
