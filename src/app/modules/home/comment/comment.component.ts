import { Component, Input } from '@angular/core';
import { CommentModel } from "../../../shared/models/comment.model";
import { CommentsService } from '../../../services/comments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  @Input()
  comment!: CommentModel;

  childrenComments: CommentModel[] = [];

  childrenLoaded: boolean = false;

  constructor(private commentsService: CommentsService) {

  }

  onDisplayChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log("Comment open: " + isChecked);

    if (!isChecked) return;

    if (this.childrenLoaded) {
      console.log("Children comments already loaded");
      return;
    }

    this.commentsService.getChildren(this.comment.id).subscribe(children => {
      this.childrenComments = children;
      console.log("Loaded " + children.length + " children comments");
      this.childrenLoaded = true;
    })
  }  

}
