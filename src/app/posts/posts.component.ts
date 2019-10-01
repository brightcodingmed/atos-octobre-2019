import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []; 

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postService._getPosts().subscribe((response: Post[]) => {
      this.posts = response;
      console.log(response);
    })
  }

}
