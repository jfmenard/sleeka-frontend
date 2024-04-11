import { Routes } from "@angular/router";
import { PostComponent } from "./modules/home/post/post.component";
import { PostsListComponent } from "./modules/home/posts-list/posts-list.component";

export const routes: Routes = [
    { path: '', component: PostsListComponent },
    { path: 's/:subsleekUrlName/p/:postId', component: PostComponent },
    { path: 's/:subsleekUrlName', component: PostsListComponent },
];
