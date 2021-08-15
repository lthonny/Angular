import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITask} from "../../shared/interfaces";
import {TasksService} from "../tasks.service";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
    // public tasksService: TasksService
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    // this.taskSubscription =
    //   console.log(this.tasksService.getAll());
      // .subscribe((response: any) => {
    //   this.tasks = response;
    //   console.log(this.tasks)
    // });

    // console.log(this.taskSubscription)

    this.http.get('http://localhost:3000/tasks')
      .subscribe((response: any)=> {
        this.tasks = response
        // console.log(response)
      })
  }

  ngOnDestroy() {
    // if (this.taskSubscription) {
    //   this.taskSubscription.unsubscribe();
    // }
  }
}
