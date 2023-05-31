import { Component } from '@angular/core';
import { Parts } from '../interfaces/parts';
import { WorkingPart } from '../interfaces/working-part';
import { MainService } from './main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent {

  constructor(private service : MainService){
    this.service.onLoad();
  }

  displayedColumnsPart: string[] = ['id', 'name', 'partNumber', 'button'];
  displayedColumns: string[] = ['id', 'name', 'partNumber', 'status'];
  dataSourceParts$ = this.service.bufferPartsData$;

  dataSourcePartWorking$ = this.service.partForWork$;

  addWorkingPart(){
    this.service.reqestWorkingPart();
  }
 
}
