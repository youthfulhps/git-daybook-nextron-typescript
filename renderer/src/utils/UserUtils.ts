import { SEARCH_URL } from '@constants';

export default class LinkUtils {
  static getUserSearchedKeywordLink(keyword: string) {
    return SEARCH_URL + keyword;
  }
}
