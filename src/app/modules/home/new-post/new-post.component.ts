import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SubSleeksService } from '../../../services/subsleeks.service';
import { SubSleek } from '../../../shared/models/sub-sleek.model';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../../services/posts.service';
import { NewPost } from '../../../shared/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule  
  ],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent implements OnInit {

  subsleeks: SubSleek[] = [];

  postForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    subsleeks: [[], Validators.required]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private subSleeksService: SubSleeksService,
    private postsService: PostsService
  ) {}  

  ngOnInit() {
    this.subSleeksService.getAllSubSleeks().subscribe(subsleeks => {
      this.subsleeks = subsleeks;
    });
  }

  onSubmit() {
    console.log('Form Data:', this.postForm.value);

    let newPost = this.postForm.value;

    this.postsService.create(newPost).subscribe(createdPost => {
      console.debug(createdPost);

      let subSleekIndex = newPost.subsleeks[0];
      console.log('Subsleek index:', subSleekIndex);
  
      let subsleek_url = this.subsleeks[subSleekIndex - 1]?.url_name;
      console.log('Subsleek url:', subsleek_url);
        
      this.router.navigate(['/s/' + subsleek_url + '/p/' + createdPost.id]);
    });
  }

}
