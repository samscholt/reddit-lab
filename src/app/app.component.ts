import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { IPost } from './interfaces/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reddit';
  postList : IPost[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any) => this.postList = data.data.children);
  }

  logPosts() {
    console.log(this.postList);
  }
}
