import { Component } from '@angular/core';
import { TaskComponent } from "./task/task.component";

export interface ITask {
  id: string,
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

  search = '';

  tasks: ITask[] = [
    { id: 'asdasd', text: 'Text...', status: false, order: 1 }
  ]

  constructor() {
    console.log(this.tasks);
  }

  updateTasks(task: ITask) {
    this.tasks.unshift(task);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  checkBoxvalue(id: string) {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index].status = !status;
    console.log(this.tasks)
  }

}
