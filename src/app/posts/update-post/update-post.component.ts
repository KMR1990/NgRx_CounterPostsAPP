import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostsById } from '../state/posts.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post! : Post;
  postForm! : FormGroup;

  constructor(private route : ActivatedRoute, private store : Store<AppState> ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
        const id = params.get('id');
        this.store.select(getPostsById, {id}).subscribe( (data) => {
          this.post = data;
          console.log(data);
          this.createForm();
        })
    })
  }

  createForm(){
    this.postForm = new FormGroup({
      title : new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(2)
      ]),
      description : new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(2)
      ]),
    })
  }

  onUpdatePost() {
    const post:Post = {
      id : this.post.id,
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }

    this.store.dispatch(updatePost({post}));
  }

}
