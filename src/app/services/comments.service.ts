import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentModel } from '../shared/models/comment.model';
import { Post } from '../shared/models/post.model';
import { SubSleeksService } from './subsleeks.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  postUrl = 'http://localhost:3000/posts/{{postId}}/c';

  commentsUrl = 'http://localhost:3000/comments/';

  private posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();

  constructor(private http: HttpClient, private subSleeksService: SubSleeksService) { 
    console.log('Posts service initialization');
  }

  public getComments(postId: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.postUrl.replace("{{postId}}", String(postId)));
  }

  public getPost(postId: number): Observable<Post> {
    console.log('Posts service - Retrieving post '+ postId);
    return this.http.get<Post>(this.postUrl + postId);
  }

}
