import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { SubSleeksService } from "../../../services/subsleeks.service";
import { SubSleek } from "../../../shared/models/sub-sleek.model";

@Component({
  selector: "app-subsleeks-list",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./subsleeks-list.component.html",
  styleUrl: "./subsleeks-list.component.css",
})
export class SubSleeksListComponent implements OnInit {

  subsleeks: SubSleek[] = [];

  isListVisible = false;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private subSleeksService: SubSleeksService) {}

  ngOnInit(): void {
    this.subSleeksService.getAllSubSleeks().subscribe(subsleeks => this.subsleeks = subsleeks);
  }

  onSubsleekSelection(item: SubSleek) {
    console.log('Subsleek selected:', item);
    this.isListVisible = false;
    //this.subSleeksService.updateSubSleek(item);
    this.router.navigate(['/s/', item.url_name]);
    //[routerLink]=""
  }

}
