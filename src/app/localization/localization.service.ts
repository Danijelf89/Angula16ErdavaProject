import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageModel } from '../models/language-model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  languagesList$: Observable<LanguageModel[]>;
  selectedLanguage$: Observable<LanguageModel>;
  private languagesListSubject = new BehaviorSubject<LanguageModel[]>([]);
  private selectedLanguageSubject = new BehaviorSubject<LanguageModel>(new LanguageModel('', ''));

  constructor(private translationService : TranslateService) {
    this.languagesList$ = this.languagesListSubject.asObservable();
    this.selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  }

  fillLanguageList() {
    this.languagesListSubject.next([
      new LanguageModel('en', this.translationService.instant('HOME.ENG')),
      new LanguageModel('sr-Latn', this.translationService.instant('HOME.SER_LAT')),
    ]);

    const selectedModel = this.languagesListSubject.value.find(x =>x.value == this.translationService.currentLang);

    this.selectedLanguageSubject.next(selectedModel!);
  }

  changeLanguage(languageModel : LanguageModel){

    
    this.translationService.use(languageModel.value).subscribe({
      next: () => {
        this.languagesListSubject.next([
          new LanguageModel('en', this.translationService.instant('HOME.ENG')),
          new LanguageModel('sr-Latn', this.translationService.instant('HOME.SER_LAT')),
        ]);

        const selectedModel = this.languagesListSubject.value.find(x =>x.value == this.translationService.currentLang);

    this.selectedLanguageSubject.next(selectedModel!);
      },
      error: (error) => {
        
      },
    });

    
  }
}
