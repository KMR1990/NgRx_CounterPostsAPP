import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, updatePost } from "./posts.actions";


export const postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        
        return {
            ...state,
            posts : [...state.posts, post]
        }
    }),

    on(updatePost, (state:any, action:any) => {
        const updatedPosts = state.posts.map( (post:any) => {
            return action.post.id === post.id ? action.post : post
        });

        return {
            ...state,
            posts : updatedPosts
        }
    })
)