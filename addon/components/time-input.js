import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TimeInputComponent extends Component {
  @service moment;

  @action
  changeTime(time) {
    const parsed = this.moment.moment(time.target.value, 'HH:mm');
    const oldDate = this.moment.moment(this.currentDate);

    let newDate = oldDate ? oldDate.clone() : this.moment.moment();
    newDate.hours(parsed.hours());
    newDate.minutes(parsed.minutes());

    let moments = this.arrayDates;
    if (moments) {
      // Update time in array if set
      moments.forEach(function (element, index) {
        if (element.diff(newDate, 'days') === 0) {
          moments[index] = newDate;
        }
      }, this);

      this.arrayDates = null;
      this.arrayDates = moments;
    }

    if (this.args.onChangedTime) {
      this.args.onChangedTime(newDate);
    }
  }
}
