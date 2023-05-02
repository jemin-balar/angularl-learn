import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-foor-loop',
  templateUrl: './nested-foor-loop.component.html',
  styleUrls: ['./nested-foor-loop.component.css']
})
export class NestedFoorLoopComponent {
title="Nested for loop"
users=[
  {name:'jems',phone:'1111',socialAccount:['facebook','instagram','whatsapp']},
  {name:'sem',phone:'1201',socialAccount:['youtube','instagram','whatsapp']},
  {name:'om',phone:'4545',socialAccount:['linkdin','yahoo','whatsapp']},
  {name:'shubh',phone:'00020'},
]
}
