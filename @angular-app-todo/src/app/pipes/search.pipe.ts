import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from "../app.component";

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(tasks: ITask[], search: string = ''): ITask[] {
    if (!search.trim()) {
      return tasks
    }

    return tasks.filter(task => {
      return task.text.toLowerCase().includes(search.toLowerCase());
    })
  }

}
