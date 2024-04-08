import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";
import { PostComponent } from './modules/home/post/post.component';
import { PostsListComponent } from './modules/home/posts-list/posts-list.component';
import { SubSleeksListComponent } from './modules/home/subsleeks-list/subsleeks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule,
    FormsModule,
    SubSleeksListComponent,
    PostsListComponent,
    PostComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
