import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  footerData$: Observable<string>;
  private footerDataSubject = new BehaviorSubject<string>('');

  constructor() {
    this.footerData$ = this.footerDataSubject.asObservable();
  }

  loadData() {
    let td = new Date();

    this.footerDataSubject.next('Erdava @' + td.getFullYear().toString());
  }
}
