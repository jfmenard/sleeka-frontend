import { Component, Input } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { PostsService } from '../../../services/posts.service';
import { Post } from "../../../shared/models/post.model";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [ RouterModule, RouterLink ] ,
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent {

  _postId!: number;

  post!: Post;

  @Input()
  get postId() { return this._postId; }

  set postId(postId: number) {
    console.log('Loading post id ' + postId);
    this._postId = postId;
    this.postsService.getPost(this._postId).subscribe(post => {
      this.post = post;
      console.log('Updated post id ' + postId);
    });
  }

  constructor(private postsService: PostsService) {
    console.log('In PostComponent init');
  }

}
