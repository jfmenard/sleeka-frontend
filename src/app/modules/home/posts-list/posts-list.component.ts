import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../../shared/models/post.model';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.posts$.subscribe((posts) => {
      this.posts = posts;
      console.log('Updated posts list');
    })
  }

}
