import { Component } from '@angular/core';

export interface Task {
  id: string,
  title: string,
  text: string,
  status: boolean,
  order: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[] = [
    { id: 'asdasd', title: 'JavaScript', text: 'Text...', status: false, order: 1 },
    { id: 'asdasd', title: 'Angular I love you', text: 'Text...', status: false, order: 2 },
    { id: 'asdasd', title: 'Node', text: 'Text...', status: false, order: 3 },
  ]

}
