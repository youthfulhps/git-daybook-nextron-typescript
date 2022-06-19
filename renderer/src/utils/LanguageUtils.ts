import * as data from '@libs/languageColors.json';

export default class LanguageUtils {
  static getLanguagePercent(total: number, partial: number) {
    return (100 * partial) / total;
  }

  static getLanguageColor(key: string) {
    return data[key].color ?? '#ffffff';
  }

  static getLanguageTotal(languages: any) {
    if (!languages) return 0;
    const values = Object.keys(languages).map((language) => languages[language]);

    if (!values.length) return 0;
    return values.reduce((sum, value) => sum + value);
  }

  static getSlicedLanguages(languages: any) {
    return Object.fromEntries(Object.entries(languages).slice(0, 7)) as any;
  }

  static getLanguageInfoList(languages: any) {
    const total = this.getLanguageTotal(languages);
    const slicedLanguages = this.getSlicedLanguages(languages);

    return Object.keys(slicedLanguages).map((languageKey) => {
      const percent = this.getLanguagePercent(total, slicedLanguages[languageKey]);
      const color = this.getLanguageColor(languageKey);
      const value = slicedLanguages[languageKey];

      return [languageKey, value, percent, color];
    });
  }
}
