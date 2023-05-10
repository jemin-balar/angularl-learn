import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog'; 
  data = "code step by step"
  datas =10
  name="jems"
  disable = true;
  show="yes";
  title2 = "CONDITIONAL RENDERING"
  onclickdisable(){
    return this.disable = false
  }
  getvlue(){
    return "get function data"
  }
  //  child to component
  childdata = 10
  updatechild()
  {
    this.childdata =Math.floor(Math.random()*10)
  }
  //  Resuable components
  userDetaiils=[
    {name:"jems balar", email:"jems@TestScheduler.com"},
    {name:"balar", email:"balar@TestScheduler.com"},
    {name:"ks balar", email:"ks@TestScheduler.com"},
    {name:"hb balar", email:"jems@test.com"},  
  ]
  // Child to parent components
  itemdata="x"
    updateData(item:string)
  {
    this.itemdata = item
  }
  // CUSTOM PIPES
titlesofpipes= "CUSTOM PIPES"
// directive
directive = "directives in angular"
}
