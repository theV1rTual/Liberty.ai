import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../interfaces/blog.interface";

@Injectable({
  providedIn: 'root',
})



export class BlogServiceService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://us-central1-libertyai.cloudfunctions.net/app/api/read')
  }
}
