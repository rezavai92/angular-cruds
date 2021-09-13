import { Component } from '@angular/core';

import { Task } from './models/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public  tasks : Task[]=[];
  public title : string="" ;

   
  generateId (){

    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }


  onTaskChange(e : Event){
    
    const target = e.currentTarget as HTMLInputElement;

    this.title = target.value;

    

    
  }


  onAddTask (){

    let newTask  : Task={
      id : this.generateId(),
      title : this.title,
      isCompleted : false
    
    }


    this.tasks.push(newTask);

  //  console.log(this.tasks)
  }

 // complete Task

  onCompleteTask(id : string){

    let existingTasks = [...this.tasks];

    const found = existingTasks.findIndex((t)=>{
      return t.id===id;
    });

    existingTasks[found].isCompleted= !existingTasks[found].isCompleted;

    this.tasks=existingTasks;
    console.log(this.tasks)
  }
  // delete Task

  onDeleteTask (id : string){

   console.log("id is ",id)
    const existingTasks =this.tasks;
    //console.log("yes")

    this.tasks= existingTasks.filter((t)=>t.id!==id)

  
    
  }

  // on update task

  onUpdateTask(task : Task){

   
    let existingTasks = [...this.tasks];

    const found = existingTasks.findIndex((t)=>{
      return t.id===task.id;
    });

    existingTasks[found]=task;

    this.tasks=existingTasks;
  }


}
