import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"; 

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  titles = "Basic forms"
  userData:any={}
  getData(Data:NgForm)
  {
  console.warn(Data)
  this.userData = Data
  }
}
