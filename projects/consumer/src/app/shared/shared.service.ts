import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sideBar = new BehaviorSubject(false);
  sideBar$ = this.sideBar.asObservable();
  showSideBar = false;
  constructor() { }
}
