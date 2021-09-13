import { Component, OnInit,Input,Output,EventEmitter, OnChanges} from '@angular/core';
import { Task } from 'src/app/models/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit,OnChanges {

 @Input() public title ="";
 @Input() public id = "";
 @Input() public isCompleted = false;

  updatedTitle=this.title;
  updatedIsCompleted = this.isCompleted;

  @Output() deletedTask = new EventEmitter<string>();
  @Output() completedTask = new EventEmitter<string>();
  @Output() updatedTask = new EventEmitter<Task>();
  updateMode =false;
  constructor() {


   }

  
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.updatedTitle=this.title;
    this.updatedIsCompleted=this.isCompleted;
  }
  onDeleteTask (){

  this.deletedTask.emit(this.id)
    
  }

  onEdit(){

    this.updateMode=true;
  }
  onUpdateTask(){

  
    const updatedTask : Task = {id :this.id,title : this.updatedTitle, isCompleted : this.updatedIsCompleted}
    this.updatedTask.emit(updatedTask)
    this.updateMode= false;
  }


  // oncomplete

  onCompleteTask(){

    this.completedTask.emit(this.id)
  }

  // text decoration

  getTextDecoration(){

    console.log("is completed",this.isCompleted)
    return this.isCompleted ? "line-through" : "none";
  }


  // button text


  getCompleteButtonText(){


    return this.isCompleted ?  "completed" :"complete"
  }
}
