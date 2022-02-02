import { SEARCH_URL } from '@constants';
import * as data from '@libs/languageColors.json';

export default class LinkUtils {
  static getUserSearchedKeywordLink(keyword: string) {
    return SEARCH_URL + keyword;
  }

  static getUserLanguagePercent(total: number, partial: number) {
    return (100 * partial) / total;
  }

  static getUserLanguageColor(key: string) {
    return data[key].color ?? '#ffffff';
  }

  static getUserLanguageTotal(languages: any) {
    if (!languages) return 0;
    const values = Object.keys(languages).map((language) => languages[language]);

    if (!values.length) return 0;
    return values.reduce((sum, value) => sum + value);
  }

  static getSlicedUserLanguages(languages: any) {
    return Object.fromEntries(Object.entries(languages).slice(0, 7)) as any;
  }

  static getUserLanguageInfos(languages: any) {
    const total = this.getUserLanguageTotal(languages);
    const slicedLanguages = this.getSlicedUserLanguages(languages);

    return Object.keys(slicedLanguages).map((languageKey) => {
      const percent = this.getUserLanguagePercent(total, slicedLanguages[languageKey]);
      const color = this.getUserLanguageColor(languageKey);
      const value = slicedLanguages[languageKey];

      return [languageKey, value, percent, color];
    });
  }
}
