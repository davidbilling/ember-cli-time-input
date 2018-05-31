import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/time-input';
import { get } from '@ember/object';
import { set } from '@ember/object';

export default Component.extend({
  layout,
  moment: service(),
  tagName: 'span',

  actions: {
    changeTime(time) {
      const parsed = get(this, 'moment').moment(time, 'HH:mm');
      const oldDate = get(this, 'moment').moment(get(this, 'currentDate'));

      let newDate = oldDate ? oldDate.clone() : get(this, 'moment').moment();
      newDate.hours(parsed.hours());
      newDate.minutes(parsed.minutes());

      let moments = get(this, 'arrayDates');
      if (moments) {
        // Update time in array if set
        moments.forEach(function (element, index) {
          if (element.diff(newDate, 'days') === 0) {
            moments[index] = newDate;
          }
        }, this);

        set(this, 'arrayDates', null);
        set(this, 'arrayDates', moments);
      }

      if (get(this, 'onChangedTime')) {
        get(this, 'onChangedTime')(newDate);
      }
    }
  },
});
