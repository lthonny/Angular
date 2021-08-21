import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';

import { ITask } from "../../shared/interfaces";

import { AlertService } from '../shared/services/alert-service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.scss']
})
export class CreateTaskPageComponent implements OnInit, OnDestroy {

  searchPosts: string = '';

  form: FormGroup = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
    ]),
    text: new FormControl(null, [
      Validators.required,
    ]),
  });

  constructor(
    private tasksService: TasksService,
    private alert: AlertService
  ) { }

  ngOnInit(): void { }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const task: ITask = {
      title: this.form.value.title,
      text: this.form.value.text,
    }

    this.tasksService.create(task)
      .subscribe(() => {
        this.form.reset();
      })

    console.log(task);
  }

  ngOnDestroy() { }
}
