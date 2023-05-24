import { TranslateService, DEFAULT_LANGUAGE } from '@ngx-translate/core';
import { LANGUAGE_LIST, LANGUAGE_STORAGE_KEY } from '../app-constants';

export function loadDefaultLanguage(service: TranslateService) {
  return () => {
    service.addLangs(LANGUAGE_LIST);
    if (localStorage.getItem(LANGUAGE_STORAGE_KEY)) {
      const language = localStorage.getItem(LANGUAGE_STORAGE_KEY) || '';
      service.use(language);
      return;
    }
    const browserLang = service.getBrowserLang();

    service.use(browserLang?.match(LANGUAGE_LIST.join('|'))
    ? browserLang.toString()
    : DEFAULT_LANGUAGE.toString());

    localStorage.setItem(LANGUAGE_STORAGE_KEY, service.currentLang);

    return Promise.resolve();
  };
}
