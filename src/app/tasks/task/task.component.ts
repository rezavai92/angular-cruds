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


  updatedTitle=this.title;

  @Output() deletedTask = new EventEmitter<string>();
  @Output() updatedTask = new EventEmitter<Task>();
  updateMode =false;
  constructor() {


   }

  
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.updatedTitle=this.title;
  }
  onDeleteTask (){

  this.deletedTask.emit(this.id)
    
  }

  onEdit(){

    this.updateMode=true;
  }
  onUpdateTask(){

  
    const updatedTask : Task = {id :this.id,title : this.updatedTitle}
    this.updatedTask.emit(updatedTask)
    this.updateMode= false;
  }
}
