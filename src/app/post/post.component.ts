import { Component, OnInit, Input } from '@angular/core';

import { IPost } from '../interfaces/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;

  constructor() { }

  ngOnInit() {
    this.post.permalink = "https://www.reddit.com" + this.post.permalink;
  }

}
