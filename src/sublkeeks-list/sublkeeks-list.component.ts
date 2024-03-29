import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

export interface SubSleek {
  name: string;
  description: string;
}

@Component({
  selector: "app-sublkeeks-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sublkeeks-list.component.html",
  styleUrl: "./sublkeeks-list.component.css",
})
export class SublkeeksListComponent implements OnInit {

  subsleeksUrl = 'http://localhost:3000/subsleeks';

  subsleeks: SubSleek[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<SubSleek[]>(this.subsleeksUrl).subscribe(subsleeks => this.subsleeks = subsleeks);;
  }

}
