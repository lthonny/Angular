import { Pipe, PipeTransform } from "@angular/core";
import { ITask } from "../../../shared/interfaces";

@Pipe({
  name: 'searchTasks'
})
export class SearchPipe implements PipeTransform {
  transform(tasks: ITask[], search = ''): ITask[] {
    if (!search.trim()) {
      return tasks;
    }

    return tasks.filter(task => {
      return task.title.toLowerCase().includes(search.toLowerCase());
    })
  }
}
