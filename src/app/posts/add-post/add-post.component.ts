import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm! : FormGroup;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      description : new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
    })
  }
  
  onAddPost(){
    if(!this.postForm.valid){
      return;
    }

    const post:Post = {
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }

    this.store.dispatch(addPost({post}));

  }

}
