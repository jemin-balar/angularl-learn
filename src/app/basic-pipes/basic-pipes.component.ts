import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pipes',
  templateUrl: './basic-pipes.component.html',
  styleUrls: ['./basic-pipes.component.css']
})
export class BasicPipesComponent {
title="Basic of pipes"
today = Date()
users={
  name:"jems",
  age:21
}
convertuppercase(item:string)
{ 
  return item.toUpperCase()
}
title2 = "hello how are you ?"
}
