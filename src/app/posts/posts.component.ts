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
  editable = false;
  display = false;
  loading: boolean = false;

  myPost: Post = {
    title: '',
    body: ''
  }

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

  createPost(form) {

    if(form.valid) {

      this.loading = true;
      this.postService._createPost(form.value)
                      .subscribe((post: Post) => {
                        
                        this.posts = [post, ...this.posts];
  
                        this.myPost = {
                          title: '',
                          body: ''
                        }
  
                        this.display = false;
                        this.loading = false;
  
                      })
      
    }
    else {
      alert('reject');
    }

 
  }

  displayForm() {
    this.display = !this.display;
  }


  deletePost(id: number) {
    this.postService._deletePost(id)
                    .subscribe(() => {
                      this.posts = this.posts.filter(post =>  post.id !== id);
                    })
  }

  log(data) {
    console.log(data);
  }

  updatePost(myForm) {
   

    let myData = {
      ...myForm.value,
      id: this.myPost.id
    }

    this.postService._updatePost(myData)
                    .subscribe((res) => {
                      this.editable = false;
                      this.display = false;
                    })
  }

  editPost(post: Post) {
    this.display = true;
    this.myPost = post;
    this.editable = true;
  }

}
