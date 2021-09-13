import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../models/task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    @Input() tasks : Task []=[];

    @Output() deletedTask = new EventEmitter<string>();
    @Output() completedTask = new EventEmitter<string>();
    @Output() updatedTask = new EventEmitter<Task>();
  constructor() { 

    console.log(this.tasks)
  }

  ngOnInit(): void {
  }

  onDeleteTask(id : string){

    
    this.deletedTask.emit(id)

  }

  onUpdateTask(task:Task){

    this.updatedTask.emit(task)
  }


  onCompleteTask(id : string){

    this.completedTask.emit(id)
  }
}
