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
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.fetchTasks();
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

  completedTask(id: string, status: boolean) {
    this.completeTask = this.tasksService.completeTask(id, status)
      .subscribe(() => {
        this.fetchTasks();
      })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
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
      this.alertService.danger('Task has been deleted');
    })
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}