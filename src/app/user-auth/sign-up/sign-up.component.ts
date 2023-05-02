import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  getName()
  {
    alert("hey function called")
  }
  getNumber(name:number,secondname:string)
  {
    alert(name)
    alert(secondname)
  }
  getData(val:string)
  {
    console.warn(val)
  }
  count=0
  counter(type:string)
  {
    type==="add" ? this.count++ : this.count--
  }
}
