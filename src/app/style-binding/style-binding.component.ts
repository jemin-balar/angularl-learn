import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css'],
})
export class StyleBindingComponent {
  title = 'STYLE BINDING';
  color = 'green';
  bgColor = "black";
  updateColor(){
    this.color = 'blue'
    this.bgColor = 'orange'
  }
}
