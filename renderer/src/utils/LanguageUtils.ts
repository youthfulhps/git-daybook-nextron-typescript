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

  static getMergedLanguageList(languages: any[]) {
    const mergedLanguages = {};

    languages.map((language) => {
      Object.keys(language).map((key) => {
        if (mergedLanguages.hasOwnProperty(key)) {
          mergedLanguages[key] += language[key];
        } else {
          mergedLanguages[key] = language[key];
        }
      });
    });

    return mergedLanguages;
  }

  static getSortedLanguageList(mergedLanguage) {
    return Object.entries(mergedLanguage)
      .sort(([, a], [, b]) => Number(b) - Number(a))
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
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

//랭귀지 배열 생성까지 구현함, 이어서 랜더링할 수 있도록 각각의 색깔, 퍼센테이지 구할 수 있어야 됨
