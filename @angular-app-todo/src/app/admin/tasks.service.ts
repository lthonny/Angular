import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITask} from "../shared/interfaces";
import {map, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class TasksService {
  constructor(
    private http: HttpClient
  ) {}

  // getAll(): Observable<ITask[]> | Promise<ITask[]> {
    // return this.http.get(`http://localhost:3000/tasks`);
      // .pipe(map((response: { [key: string]: any }) => {
      //   return Object
      //     .keys(response)
      //     .map(key => ({
      //       ...response[key],
      //       id: key,
      //       date: new Date(response[key].date)
      //     }))
      // }))
  // }

}
