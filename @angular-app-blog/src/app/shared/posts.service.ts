import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IFbCreateResponse, IPost } from "./interfaces";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private http: HttpClient) { }

  create(post: IPost): Observable<IPost> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map((response: IFbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      }))
  }
}