import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { SubSleek } from '../shared/models/sub-sleek.model';

@Injectable({
  providedIn: 'root'
})
export class SubSleeksService {

  subSleeksUrl = 'http://localhost:3000/subsleeks';

  private currentSubSleek = new ReplaySubject<SubSleek>();
  currentSubSleek$ = this.currentSubSleek.asObservable();

  private subSleeks = new BehaviorSubject<SubSleek[]>([]);
  subSleek$ = this.subSleeks.asObservable();

  constructor(private http: HttpClient) {

  }

  updateSubSleek(newData: SubSleek) {
    console.log('Updating current subsleek to ' + newData.url_name);
    this.currentSubSleek.next(newData);
  }  

  getCurrentSubSleek$(): Observable<SubSleek> {
    return this.currentSubSleek.asObservable();
  }

  getAllSubSleeks(): Observable<SubSleek[]> {
    return this.http.get<SubSleek[]>(this.subSleeksUrl);    
  }

}  

