import moment from 'moment';

export default class DateUtils {
  static getTodayDate() {
    return moment().format('YYYY-MM-DD');
  }

  static getTomorrowDate() {
    return moment().add(1, 'days').format('YYYY-MM-DD');
  }
}
