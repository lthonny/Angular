import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Task> = new EventEmitter<Task>();

  title: string = '';
  text: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addTask() {
    const id = Math.random().toString(36).substr(2, 9);
    if (this.title.trim() && this.text.trim()) {
      const task: Task = {
        id: id,
        title: this.title,
        text: this.text,
        status: false,
        order: 5
      }
      this.onAdd.emit(task);
      this.title = this.text = '';
    }
  }
}
