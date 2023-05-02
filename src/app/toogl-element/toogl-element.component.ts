import { Component } from '@angular/core';

@Component({
  selector: 'app-toogl-element',
  templateUrl: './toogl-element.component.html',
  styleUrls: ['./toogl-element.component.css']
})
export class TooglElementComponent {
title = "Toogle Element"
display = true
toogle()
{
  this.display = !this.display
}
}
