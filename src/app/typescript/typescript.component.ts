import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {
title= "Basic Of Typescript"
data:number=20 // if single value
dataabc:{name:string,phonenumber:number}={name:"jemsbalar",phonenumber:900550063} // if object
items:string[]=["hello","hey","abc"] // if array
// function one
// getData(item:string | boolean) // second method
getData(item:number[]) // if array
// getData(item:{name:string,number:number}) // if object
{
  if(typeof item === "number")
  {
   return item*20
  }
  return;
}
// function two
getItem()
{
  this.getData([20])
}
}
