import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITask} from "../shared/interfaces";
import {map, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class TasksService {
  constructor(
    private http: HttpClient
  ) {}

  create(task: ITask): Observable<ITask> {
    return this.http.post<ITask>('', task);
  }

  // getAll(): Observable<ITask[]> {
  //   return this.http.get('http://localhost:3000/tasks')
  //     .pipe(map(response) => {
  //       return Object.keys(response: any)
  //         .keys(response)
  //         .map()
  //   })
  // }

  getAll(): Observable<ITask[]> {
    return this.http.get(`http://localhost:3000/tasks`)
      .pipe(map((response: any ) => {
        return []
        // Object
          // .keys(response)
          // .map(key => ({
          //   ...response[key],
          //   id: key,
          //   date: new Date(response[key].date)
          // }))
      }))
  }

}
