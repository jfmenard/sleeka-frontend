import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SubSleeksService } from "../../../services/subsleeks.service";
import { SubSleek } from "../../../shared/models/sub-sleek.model";

@Component({
  selector: "app-subsleeks-list",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./subsleeks-list.component.html",
  styleUrl: "./subsleeks-list.component.css",
})
export class SubSleeksListComponent implements OnInit {

  subsleeksUrl = 'http://localhost:3000/subsleeks';

  subsleeks: SubSleek[] = [];

  isListVisible = false;

  constructor(private http: HttpClient, private subSleeksService: SubSleeksService) {}

  ngOnInit(): void {
    this.http.get<SubSleek[]>(this.subsleeksUrl).subscribe(subsleeks => this.subsleeks = subsleeks);
  }

  onSubsleekSelection(item: SubSleek) {
    console.log('Subsleek selected:', item);
    this.isListVisible = false;
    this.subSleeksService.updateSubSleek(item);
  }

}
