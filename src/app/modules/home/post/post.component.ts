import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CommentsService } from "../../../services/comments.service";
import { PostsService } from '../../../services/posts.service';
import { CommentModel } from "../../../shared/models/comment.model";
import { Post } from "../../../shared/models/post.model";
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLink, CommentComponent ] ,
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent {

  _postId!: number;

  post!: Post;

  comments: CommentModel[] = [];

  @Input()
  get postId() { return this._postId; }

  set postId(postId: number) {
    console.log('Loading post id ' + postId);
    this._postId = postId;
    this.postsService.getPost(this._postId).subscribe(post => {
      this.post = post;
      console.log('Updated post id ' + postId);
    });

    this.commentsService.getComments(postId).subscribe(comments => {
      this.comments = comments;
      console.log('Loaded comments for post id ' + postId + ' (' + this.comments.length + " comments)");
    });

  }

  constructor(private postsService: PostsService, private commentsService: CommentsService) {
    console.log('In PostComponent init');
  }

}
