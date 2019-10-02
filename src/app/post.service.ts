import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  _getPosts() {
    return this.http.get(this.url);
  }

  _createPost(data: Post) {
      return this.http.post(this.url, data);
  }

  _deletePost(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  _updatePost(post: Post) {
    return this.http.put(`${this.url}/${post.id}`, post);
  }

}
