import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { SubSleek } from '../shared/models/sub-sleek.model';
import { SubSleeksService } from './subsleeks.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl = 'http://localhost:3000/subsleeks/';

  postUrl = 'http://localhost:3000/posts/';

  private posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();

  constructor(private http: HttpClient, private subSleeksService: SubSleeksService) { 
    console.log('Posts service initialization');
    subSleeksService.currentSubSleek$.subscribe({
      next: (newSubSleek: SubSleek) => {
        console.log('Current SubSleek updated, loading posts for: ', newSubSleek);
        this.http.get<Post[]>(this.postsUrl + newSubSleek.url_name).subscribe(posts => this.posts.next(posts));
      },
      error: (err) => {
        console.error('Error while subscribing:', err);
      }
    })
  }

  public getPosts(subsleekUrlName: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + subsleekUrlName);
  }

  public getPost(postId: number): Observable<Post> {
    console.log('Posts service - Retrieving post '+ postId);
    return this.http.get<Post>(this.postUrl + postId);
  }

}
