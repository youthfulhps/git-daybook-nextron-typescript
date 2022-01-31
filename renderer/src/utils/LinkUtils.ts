import { SEARCH_URL } from '@constants';

export default class LinkUtils {
  static getSearchedKeywordLink(keyword: string) {
    return SEARCH_URL + keyword;
  }
}
