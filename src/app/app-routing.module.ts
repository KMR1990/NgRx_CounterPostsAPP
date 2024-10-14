import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './conter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'counter',
    component : CounterComponent
  },
  {
    path : 'posts',
    component : PostsComponent,
    children : [
      {
        path : 'addPost',
        component : AddPostComponent
      },
      {
        path : 'edit/:id',
        component : UpdatePostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
