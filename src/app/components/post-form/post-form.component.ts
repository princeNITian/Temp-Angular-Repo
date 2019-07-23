import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title,body) {
    if(!title || !body){
      alert("Please enter all the field.");
    }
    else {
      this.postService.savePost({title,body} as Post ).subscribe(post =>{
        console.log(post);
      });
    }
  }

}
