import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITask } from "../../shared/interfaces";
import { TasksService } from "../tasks.service";
import { Subscription } from "rxjs";
import { AlertService } from '../shared/services/alert-service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  tasks: ITask[] = [];
  searchTasks: string = '';

  loading: boolean = false;
  error: string = '';
  filterStatus: string = 'all';
  filterActive: boolean = false;

  taskSubscription!: Subscription;
  completeTask!: Subscription;
  deleteSubscription!: Subscription;

  constructor(
    public tasksService: TasksService,
    private alert: AlertService
  ) {
  }

  ngOnInit() {
    this.fetchTasks();
  }

  toggleClass(event: Event | any) {
    // if (this.filterActive) {
    //   event.target.style.backgroundColor = 'red';

    //   this.filterActive = false;
    //   console.log('false');
    // } else {
    //   console.log('true');
    //   this.filterActive = true;
    //   event.target.style.backgroundColor = '';
    // }
  }

  filter(filtered: string) {
    this.filterStatus = filtered;
  }

  fetchTasks() {
    return this.taskSubscription = this.tasksService.getAll()
      .subscribe((task) => {
        this.tasks = task;
      }, error => {
        this.error = error.message;
      });
  }

  completedTask(id: any, status: any) {
    this.completeTask = this.tasksService.completeTask(id, status)
      .subscribe(() => {
        this.fetchTasks();
      })
  }

  // types
  remove(id: any) {
    this.deleteSubscription = this.tasksService.remove(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.alert.danger('Task has been deleted');
    })
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
