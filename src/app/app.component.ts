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
}