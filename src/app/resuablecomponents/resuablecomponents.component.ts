import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resuablecomponents',
  templateUrl: './resuablecomponents.component.html',
  styleUrls: ['./resuablecomponents.component.css'],
})
export class ResuablecomponentsComponent {
  @Input() item: { name: string; email: string } = { name: '', email: '' };
}
