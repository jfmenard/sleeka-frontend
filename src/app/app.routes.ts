import { Routes } from "@angular/router";
import { NewPostComponent } from "./modules/home/new-post/new-post.component";
import { PostComponent } from "./modules/home/post/post.component";
import { PostsListComponent } from "./modules/home/posts-list/posts-list.component";

export const routes: Routes = [
    { path: '', component: PostsListComponent },
    { path: 's/:subsleekUrlName/p/:postId', component: PostComponent },
    { path: 's/:subsleekUrlName', component: PostsListComponent },
    { path: '/p/new', component: NewPostComponent },
];
