import { Component } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  // displayval :string='';
  displayval='';
getValue(val:string)
{
  console.warn(val)
  this.displayval=val
}
}