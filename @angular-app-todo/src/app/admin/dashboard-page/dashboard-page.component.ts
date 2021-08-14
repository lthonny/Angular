import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITask} from "../../shared/interfaces";
import {TasksService} from "../tasks.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  tasks: ITask[] = [];
  searchTasks: string = '';

  taskSubscription!: Subscription;

  constructor(
    private tasksService: TasksService
  ) {
  }

  ngOnInit(): void {
    this.taskSubscription = this.tasksService.getAll().subscribe(task => {
      // this.tasks = task;
      console.log(task)
    });
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
