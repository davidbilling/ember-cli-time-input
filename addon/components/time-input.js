import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/time-input';

export default Component.extend({
  layout,
  moment: service(),
  tagName: 'span',

  actions: {
    changeTime(time){
      const parsed = this.get('moment').moment(time, 'HH:mm');
      const oldDate = this.get('moment').moment(this.get('currentDate'));

      var newDate = oldDate ? oldDate.clone() : this.get('moment').moment();
      newDate.hours(parsed.hours());
      newDate.minutes(parsed.minutes());

      let moments = this.get('arrayDates');
      if(moments){
        // Update time in array if set
        moments.forEach(function(element, index) {
          if (element.diff(newDate, 'days') === 0){
            moments[index] = newDate;  
          }
        }, this);

        this.set('arrayDates', null);
        this.set('arrayDates', moments);
      }

      this.sendAction('action', newDate);
    }
  },
});
