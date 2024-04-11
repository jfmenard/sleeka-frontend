import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  
  _subsleekUrlName!: string;

  @Input()
  get subsleekUrlName() { return this._subsleekUrlName }

  set subsleekUrlName(subsleekUrlName: string) { 
    this._subsleekUrlName = subsleekUrlName; 
    console.log('New subsleek:' + this._subsleekUrlName);
    this.postsService.getPosts(this._subsleekUrlName).subscribe(posts => {
      this.posts = posts;
      console.log('Updated posts list');
    });
  }

  constructor(private postsService: PostsService) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

}

