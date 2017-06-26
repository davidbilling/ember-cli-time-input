import Ember from 'ember';
import layout from '../templates/components/time-input';

const { service } = Ember.inject;
const { Component } = Ember;

export default Component.extend({
  layout,
  moment: service(),
  tagName: 'span',

  actions: {
    changeTime(time){
      const parsed = this.get('moment').moment(time, 'HH:mm');
      const oldDate = this.get('currentDate');
      
      var newDate = oldDate ? oldDate.clone() : this.get('moment').moment();
      newDate.hours(parsed.hours());
      newDate.minutes(parsed.minutes());

      let moments = this.get('arrayDates');
      if(moments){
        // Update time in array if set
        let idx = moments.findIndex((m) => m._d === oldDate._d);
        if(idx >= 0){
          moments[idx] = newDate;
        }
        this.set('arrayDates', null);
        this.set('arrayDates', moments);
      }

      this.sendAction('action', newDate);
    }
  },  
});
