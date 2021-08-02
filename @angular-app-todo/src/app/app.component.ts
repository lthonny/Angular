import { Component } from '@angular/core';
import {TaskComponent} from "./task/task.component";

export interface Task {
  id: string,
  title: string,
  text: string,
  status: boolean,
  order: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[] = [
    { id: 'asdasd', title: 'JavaScript', text: 'Text...', status: false, order: 1 }
  ]

  updateTasks(task: Task) {
    this.tasks.unshift(task);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
