import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITask } from "../app.component";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<ITask> = new EventEmitter<ITask>();

  // title: string = '';
  text: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addTask() {
    const id = Math.random().toString(36).substr(2, 9);
    if (this.text.trim()) {
      const task: ITask = {
        id: id,
        text: this.text,
        status: false,
        order: 5
      }
      this.onAdd.emit(task);
      this.text = '';
    }
  }
}
