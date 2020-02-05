import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IPost } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://www.reddit.com/r/aww/.json';
  limit: string = '?limit=10';
  
  constructor(private http: HttpClient) {

  }
  
  getPosts() : Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl + this.limit);
  }
}
