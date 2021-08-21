import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ITask } from "../../shared/interfaces";
import { TasksService } from "../tasks.service";
import { AlertService } from '../shared/services/alert-service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  task!: ITask;
  tasks: ITask[] = [];
  searchTasks: string = '';

  loading: boolean = false;
  error: string = '';
  filterStatus: string = 'all';
  filterActive: boolean = true;

  taskSubscription!: Subscription;
  completeTask!: Subscription;
  deleteSubscription!: Subscription;

  constructor(
    public tasksService: TasksService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.fetchTasks();
  }

  filter(filtered: string, event: Event) {
    this.filterStatus = filtered;
  }

  toggleFilter() { }

  fetchTasks() {
    return this.taskSubscription = this.tasksService.getAll()
      .subscribe((task) => {
        this.tasks = task;
      }, error => {
        this.error = error.message;
      });
  }

  completedTask(task: ITask) {
    return this.tasksService.update(task.id, { status: !task.status })
      .subscribe((task) => {
        console.log(task)
        this.tasks = this.tasks.map(_task => {
          if (_task.id === task.id) {
            return task;
          }
          return _task;
        })
        console.log('this.tasks ', this.tasks)
      }, error => {
        this.error = error.message;
      });

    // this.tasksService.update(task)
    // .subscribe(updateStatusTask => console.log);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    console.log(this.tasks);
    this.updatePositionDrops(this.tasks);
  }

  updatePositionDrops(tasks: ITask[]) {
    return this.tasksService.updateOrder(tasks)
      .subscribe(() => {
        this.fetchTasks();
      })
  }

  remove(id: string) {
    this.deleteSubscription = this.tasksService.remove(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      // this.alertService.danger('Task has been deleted');
    })
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}