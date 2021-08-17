import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ITask } from 'src/app/shared/interfaces';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  task!: ITask;
  form!: FormGroup;
  submitted: boolean = false;
  updateSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.tasksService.getById(params['id']);
      })
    )
      .subscribe((task: ITask) => {
        this.task = task;
        this.form = new FormGroup({
          title: new FormControl(task.title, Validators.required),
          text: new FormControl(task.text, Validators.required)
        })
      })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    this.updateSub = this.tasksService.update({
      ...this.task,
      text: this.form.value.text,
      title: this.form.value.title
    })
      .subscribe(() => {
        this.submitted = false;
      })
  }

  ngOnDestroy() {
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }
}
