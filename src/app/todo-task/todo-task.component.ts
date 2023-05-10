import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  title="Todo List"
  list:any[]=[]
  addtodotask(data:string)
  {
    this.list.push({id:this.list.length ,name: data})    
  }
  deleteitem(id:number)
  {
    this.list=this.list.filter(item=> item.id !== id)
  }
}
