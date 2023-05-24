import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './localization.service';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.css'],
})
export class LocalizationComponent implements OnInit{
  languages$ = this.service.languagesList$;
  selectedLanguage$ = this.service.selectedLanguage$;

  foods = [
    { value: 'en', viewValue: 'Eng' },
    { value: 'sr-Latn', viewValue: 'Srp' },
  ];

  selectedlanguage: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: LocalizationService
  ) {
    this.selectedlanguage = this.foods[0];
  }
  ngOnInit() {
    this.service.fillLanguageList();
  }

  changedLanguage(event: any) {
    this.service.changeLanguage(event.value);
  }
}
