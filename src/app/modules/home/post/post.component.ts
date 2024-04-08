import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [ RouterModule, RouterLink ] ,
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent implements OnInit {
  postId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.postId = Number(params.get("postId"));
    });
  }
}
