import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITask } from "../shared/interfaces";

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ITask[]> {
    return this.http
      .get<ITask[]>(`http://localhost:3000/tasks`);
  }

  create(task: ITask) {
    return this.http
      .post<ITask>(`http://localhost:3000/tasks`, task);
  }

  // completeTask(id: string, status: boolean): Observable<ITask> {
  //   return this.http
  //     .put<ITask>(`http://localhost:3000/tasks/${id}`, { status })
  // }

  update(id: any, task: ITask) {
    return this.http
      .put<ITask>(`http://localhost:3000/tasks/${id}`, task);
  }

  updateOrder(tasks: ITask[]) {
    return this.http
      .post<ITask>(`http://localhost:3000/order/`, tasks);
  }

  getById(id: string): Observable<ITask> {
    return this.http
      .get<ITask>(`http://localhost:3000/tasks/${id}`);
  }

  remove(id: string): Observable<void> {
    return this.http
      .delete<void>(`http://localhost:3000/tasks/${id}`);
  }
}
