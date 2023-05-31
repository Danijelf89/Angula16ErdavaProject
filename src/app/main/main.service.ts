import { Injectable } from '@angular/core';
import { Parts } from '../interfaces/parts';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkingPart } from '../interfaces/working-part';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../dialogs/yes-no-dialog/yes-no-dialog.component';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  mockDataUrl = 'assets/mock-data/buffer-parts.json';
  bufferPartsData$: Observable<Parts[]>;
  partForWork$: Observable<WorkingPart[]>;

  private bufferPartsdataSubject = new BehaviorSubject<Parts[]>([]);
  private partForWorkSubject = new BehaviorSubject<WorkingPart[]>([]);

  constructor(private httpClient: HttpClient, private matDialogRef: MatDialog) {
    this.bufferPartsData$ = this.bufferPartsdataSubject.asObservable();
    this.partForWork$ = this.partForWorkSubject.asObservable();
  }

  onLoad() {
    this.httpClient
      .get<Parts[]>(this.mockDataUrl)

      .subscribe({
        next: (data) => {
          this.bufferPartsdataSubject.next(data);
        },
        error: (err) => {
          console.log('error' + err);
        },
      });
  }

  reqestWorkingPart() {
    this.httpClient
      .get<Parts[]>(this.mockDataUrl)

      .subscribe({
        next: (data) => {
          const toList: Parts[] = [];

          if (data[0].status == 'In error') {
            let dialogRes = this.matDialogRef.open(YesNoDialogComponent);
            dialogRes.afterClosed().subscribe((result) => {
              if (result == 'No') {
                return;
              } else {
                data.filter((x) => x.id != data[0].id);

                let test = this.takeAnotherPart(data);

                //toList.push(this.takeAnotherPart(data));

                if(test == null){
                  this.matDialogRef.open(InfoDialogComponent, {data: `There are no avaliable parts`});
                  return;
                }

                toList.push(test);

                this.bufferPartsdataSubject.next(
                  this.bufferPartsdataSubject.value.filter(
                    (x) => x.id != toList[0].id
                  )
                );

                this.partForWorkSubject.next(toList);
              }
            });
          } else {
            this.bufferPartsdataSubject.next(
              this.bufferPartsdataSubject.value.filter(
                (x) => x.id != toList[0].id
              )
            );

            this.partForWorkSubject.next(toList);
            return;
          }
        },
        error: (err) => {
          console.log('error' + err);
        },
      });
  }

  takeAnotherPart(data: Parts[]): Parts {
    return  data.filter((x) => x.status == 'Avaliable')[0];

    
  }
}
