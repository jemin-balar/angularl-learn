import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childparent',
  templateUrl: './childparent.component.html',
  styleUrls: ['./childparent.component.css']
})
export class ChildparentComponent { 
  @Output() updateDataEvent = new EventEmitter<string>();
  
}
