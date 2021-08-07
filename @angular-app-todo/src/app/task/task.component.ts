import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  OnDestroy, Output, EventEmitter
} from '@angular/core';
import { ITask } from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy {

  @Input()
  task!: ITask;
  @Output() onRemove = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();

  constructor() {
    console.log('1-constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2-ngOnChanges');
  }

  ngOnInit(): void {
    console.log('3-ngOnInit');
  }

  ngDoCheck() {
    console.log('4-ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('5-ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('6-ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7-ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('8-ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9-ngOnDestroy');
  }


  toggleStatus: boolean = false;
  checkBoxvalue(event: any) {
    // this.toggleStatus = this.toggleStatus;
    this.statusChange.emit(this.task.id);
  }

}
