import { Pipe, PipeTransform } from "@angular/core";
import { ITask } from "src/app/shared/interfaces";

@Pipe({
  name: 'filterTasks'
})
export class FilterPipe implements PipeTransform {
  transform(tasks: ITask[], filterStatus = ''): ITask[] | any {
    if (!filterStatus.trim()) {
      return tasks;
    }

    if (filterStatus === 'all') {
      return tasks;
    }

    if (filterStatus === 'completed') {
      return tasks.filter(task => task.status === true);
    }

    if (filterStatus === 'incompleted') {
      return tasks.filter(task => task.status === false);
    }
  }
}